var add = document.getElementById("add");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var devided = document.getElementById("divided");
var eql = document.getElementById("equal");
var point = document.getElementById("point");
multiply.disabled = true;
devided.disabled = true;
eql.disabled = true;

var result = document.getElementById("result");
var resultValue = document.getElementById("resultValue");
function num (num){
    result.value += num;
    add.disabled = false;
    minus.disabled = false;
    devided.disabled = false;
    multiply.disabled = false; 
    eql.disabled = false;   
}
function funNum(funNumm){
    result.value += funNumm;
      add.disabled = true;
      minus.disabled = true;
      devided.disabled = true;
      multiply.disabled = true;
      point.disabled = false
}
function clearResult(){
    result.value = "";
    resultValue.innerHTML = "";
    multiply.disabled = true;
    devided.disabled = true;
    point.disabled = false;
}
function equal(){
     result.value = eval(result.value);
    resultValue.innerHTML += result.value;
    resultValue.innerHTML += "  ";   
}
function clearInputResult(){
    result.value = "";
    multiply.disabled = true;
    devided.disabled = true;
    point.disabled = false;
}
function square(){
    result.value = result.value * result.value;
}
function divideOne(){
    result.value = 1 / result.value
}
function squareRoot(){
    var sq = Math.sqrt(result.value);
    result.value = sq
}
function pointt(pont){
    result.value += pont;
    point.disabled = true
}


var result = document.getElementById("result");
function del(){
    result.value = result.value.slice(0, result.value.length - 1)
}