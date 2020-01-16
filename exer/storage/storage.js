let name = localStorage.getItem("myname");
if(name != null) {
    document.getElementById("form").style.display = "none";
    let text = `Hello, ${name}!`;
    document.getElementById("hello").innerText = text;

}

document.querySelector("input[type=button]")
        .addEventListener("click", hello);

function hello() {
    document.getElementById("form").style.display = "none";
    let name = document.getElementById("name").value;
    localStorage.setItem("myname", name);
    let text = `Hello, ${name}!`;
    document.getElementById("hello").innerText = text;

}