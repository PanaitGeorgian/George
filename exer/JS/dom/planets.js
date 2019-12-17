alert = function() {
    var planet = document.querySelector("#redplanet");
    planet.innerHTML = "Aliens approaching!";
    planet.style.color = "red";
},
clear = function() {
    var planet = documet.querySelector("#replanet");
    planet.innerHTML = "Nothing to report!";
    planet.style.color = "black";
}
document.querySelector("#redplanet").onmouseover = alert;
document.querySelector("#redplanet").onmouseout = clear;
