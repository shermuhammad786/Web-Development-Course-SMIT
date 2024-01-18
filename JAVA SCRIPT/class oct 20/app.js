// var onee = document.getElementById("one")
// var two = document.getElementById("two")
// var three = document.getElementById("three")

// var text = document.createTextNode("hello world!")
// console.log(onee.appendChild(text));
// var inpt =document.getElementById("input");
// var h11 = document.createElement("h5")
// onee.appendChild(inpt.value)
// function set(){
//     onee.appendChild(h11)
//     h11.innerHTML += inpt.value
//     h11.innerHTML += "<br>"
// }
// function delet(){
//     h11.innerHTML = ""
// }
// // console.log(onee.classList)
// // onee.classList.add("sherr")
// // console.log(onee.classList.contains("sher"))
// // console.log(onee.classList)

// // onee.classList.contains("sher") ? true : "hai"



// // insertbefore konsa add krna hai aur kiss se pehleee
// // replaceChild naya wala child add krna hia aur purana wala konsa remove krna hai



var content = document.getElementById("contents")
var shrt = document.getElementById("short")
content.style.visibility = "visible"
function short(){
    // content.style.display = "block"
    if(content.style.visibility == "visible"){
        content.style.visibility = "hidden";
    }else{
        content.style.visibility = "visible"
    }
}