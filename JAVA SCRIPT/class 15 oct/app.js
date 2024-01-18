// var list = document.getElementById("hlw")
// const classValue = list.classList;
// console.log(classValue)
// var dom = window.matchMedia("(max-widht: 680px)")
var short = document.getElementById("short");
var middle = document.getElementById("middle");
var icon = document.getElementById("icons");
// var widh = document.body.style.maxWidth;
// if(widh == "675px"){
//     middle.style.display = "none";
//     icon.style.display = "none";
// }
// console.log(document.body.style.maxWidth)

function myFunction(x) {
    if (x.matches) { // If media query matches
        middle.style.display = "none";
        icon.style.display = "none";
        short.style.display = "block";
    }
    else{ // If media query matches
        middle.style.display = "flex";
        icon.style.display = "flex";
        short.style.display = "none";
    }
  }
  
  var x = window.matchMedia("(max-width: 675px)")
    myFunction(x)
    x.addListener(myFunction) 