var off = document.getElementById("off");
var on = document.getElementById("on");
var btn = document.getElementById("btn");

console.log(btn.nodeValue)
 console.log(btn.style)

function onn(){
    off.style.display = "none"
    on.style.display = "block"
}
 function  offf() {
    off.style.display = "block"
    on.style.display = "none"
}
