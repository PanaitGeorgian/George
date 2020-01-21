const animals = [ 'turtle', 'snail', 'corgi', 'parrot', 'rabbit', 'bear', 'panda', 'fish', 'shark',
'pig', 'crab', 'rhinoceros'];

const url = 'https://png.icons8.com/100/000000/color/'

var images = animals.map(x => url + x + '.png');

images = images.concat(images);

function shuffle(array) {
    let i = 0;
    for(i = 0; i < array.length; i++){
        let j = Math.floor(Math.random() * array.length);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffle(images);
console.log(images);

let i;
let content = '';
for(i = 0; i < images.length; i++) {
    let html = `<li><img src="${images[i]}"></li>`;
    content += html;
}
document.querySelector('ul').innerHTML = content;

document.querySelectorAll('li')
        .forEach(e => e.addEventListener('click', onclick));

var active = [];       
function onclick(event) {
    if(active.length == 0) {
       active.push(event.target);
       event.target.querySelector('img').style.visibility = "visible"
       event.target.removeEventListener('click', onclick);
    } else if (active.length == 1) {
        active.push(event.target);
        event.target.querySelector('img').style.visibility = "visible"
        event.target.removeEventListener('click', onclick);
        if(active[0].querySelector('img').src
           == active[1].querySelector('img').src 
        ) {
            active = [];
        } else {
            setTimeout( hide, 1000 );
        }
    }

}

function hide() {
    active[0].querySelector('img').style.visibility = 'hidden';
    active[1].querySelector('img').style.visibility = 'hidden';
    active[0].addEventListener('click', onclick);
    active[1].addEventListener('click', onclick);
    active = [];
}