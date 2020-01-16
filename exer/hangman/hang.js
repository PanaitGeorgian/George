var game = {
    words: ['apple', 'orange' , 'banana'],
    word: undefined,
    letters: [],
    triestLeft: 6,
    start: function() {
        this.word = this.randomWord();
    },
    randomWord: function() {
        let index = Math.floor(Math.random() * this.words.length);  
        return this.words[index];
    },
    tryLetter: function(letter) {
        this.letters.push(letter);
        if(!this.word.split('').includes(letter)) {
            this.triestLeft--;
        }
    },
    isDead: function() {
        return this.triestLeft == 0;
    },
    isWinner: function() {
        return this.word.split('')
                   .every(letter => this.letters.includes(letter))
    }
};

function renderLetters() {
    document.getElementById("letters").innerText = game.letters.join(' ');
}
function renderWord() {
    let text = game.word.split('')
                        .map(letter => game.letters.includes(letter) ? letter : '_')
                        .join(' ');
    document.getElementById("word").innerText = text;

}
function renderDrawing() {
    let parts = ['head', 'body', 'left_arm', 'right_arm', 'left_leg', 'right_leg'];
    let visible = parts.slice(0 , 6 - game.triestLeft);
    let invisible = parts.slice(6 - game.triestLeft);
    visible.forEach(name => document.getElementById(name).style.visibility = 'visible');
}
function renderView() {
    renderLetters();
    renderWord();
    renderDrawing();   
}
window.addEventListener('keydown', function(event) {
    if (game.isDead() || game.isWinner()) return;
    game.tryLetter(event.key);
    renderView();
});

game.start();
renderView();
