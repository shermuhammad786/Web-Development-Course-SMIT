var input = document.createElement("h1")
var spn = document.createElement("span")
input.append(spn)

// console.log(spn)

input.setAttribute("type" ,"text")
input.setAttribute("class" ,"input")
input.setAttribute("id" ,"input")
var btn = document.createElement("button")
btn.innerHTML = "click me";
btn.setAttribute("onclick" , "bttn()")
var div = document.getElementById("div")
div.style.display = "flex";
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.style.height = "100vh"
div.style.width = "100%"

input.innerHTML = "Background Color = ";

div.append(input)
div.append(btn)
// console.log(div)

console.log(input)

var body = document.querySelector("body")
function bttn(){
    var color = ["red" , "blue" , "green" , "yellow"]
var number = Math.floor(Math.random() * 4)
console.log(number)
  body.style.backgroundColor = color[number]
//   input.firstChild.innerHTML = color[number]
// input.childNodes.innerHTML = spn.innerHTML = color[number];
    // spn.innerHTML = color[number];
    input.childNodes.innerHTML = "red"
}













// var btn1 = document.getElementById("btn1")
// var btn2 = document.getElementById("btn2")
// var btn3 = document.getElementById("btn3")
// var count = document.getElementById("count")
// count.innerHTML = 0;
// function decrement(){
//     count.innerHTML--
//     if(count.innerHTML < 0){
//         count.style.color = "red"
//     }else if(count.innerHTML == 0){
//         count.style.color = "black"
//     }
// }
// function reset(){
//     count.innerHTML = 0
  
//     if(count.innerHTML == 0){
//         count.style.color = "black"
//     }  
// }
// function increment(){
//     count.innerHTML++
//     if(count.innerHTML > 0){
//         count.style.color = "green"
//     }else if(count.innerHTML == 0){
//         count.style.color = "black"
//     }
// }