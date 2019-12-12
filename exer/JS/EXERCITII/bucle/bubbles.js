
var scores = [70, 25, 127, 98, 25, 78, 11, 67, 101, 5];
var fruits = [ "mere", "mandarine", "portocale", "nuci", "banane", "kiwi"];
    
var max;
var position;

for(var i = 0; i < scores.length; i++) {
    if(scores[i] > max) {
        max = scores[i];
        position = i;
    }
}
document.write( max + " bule pe pozitia " + position); 
document.write("<br>")

max = fruits[0]
for(var i = 0; i < fruits.length; i++) {
    if(fruits[i] > max) {
        max = fruits[i];
        position = i;
    }
}

document.write("Cele mai mare fructe sunt " + max)
