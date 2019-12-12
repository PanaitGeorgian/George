var name = "George"
var message = "Hello " + name + "!";
var timeout = 3000;
var isNight = false; 
var isMornng = false ; 
var nothing = null;

var date = new Date();
var hour = date.getHours()

if (hour  = 0 )
    allert("Happy New Year")    
else if (hour >= 20 || hour <= 6) {
    alert("Noapte Buna!") ; 
    alert("Somn usor")z
} else if ( hour <= 11 ) {
    alert("Buna dimineata")
} else if( hour <=19 ) {
    alert("Buna Ziua")

}else {
    alert("Buna seara")
} 



setTimeout(sayHello, timeout);
function sayHello() {
    // alert(message);
    console.log(message); 
}