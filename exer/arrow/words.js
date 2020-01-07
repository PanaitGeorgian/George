const words = ["Hello" , "car" , "keyboard" , "Piece" , "Music" , "191919"];
text = 
words.sort()
     .filter(word => word.charAt(0) >= "A" && word.charAt(0) <= "Z")
     .join("</br>");

document.getElementById("words").innerHTML = text;     