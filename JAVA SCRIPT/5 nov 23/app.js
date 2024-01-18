// currentTarget , target mtlb konsa element hia pr ksi parameters pe mille ga
// this same currentTarget
// normal function this chala jae ha apne baap ke pass 
// arrow function me this chala jae ga hamesha window;

var btn = document.getElementById("btn");
function moveup(){
    btn.style.marginTop = "30px"
}
// console.log(btn)
// btn.addEventListener("keyup", function () {
//     console.log("key up")
//     // console.log(btn.innerHTML);
// })
// btn.addEventListener("keydown", function () {
//     console.log("key down")
// })
// btn.addEventListener("keypress",()=>{
//     console.log("key pressed");
// })