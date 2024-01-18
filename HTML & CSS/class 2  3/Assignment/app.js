var num ;
// var number = 0;
var number = document.getElementById("number");
function counting(){
    // number.innerHTML = 0;
    // ++number.innerHTML
    number.innerHTML++
}
num = setInterval(counting,10)

setTimeout(function(){
    clearInterval(num)
},500)

for(i = 0;i<99;i++){
    counting();   
}
// number.innerHTML = 100
// console.log(number.innerHTML)