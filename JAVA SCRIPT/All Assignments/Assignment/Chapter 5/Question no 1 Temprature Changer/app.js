var para = document.getElementById("para");
function fahrenhiet(){
var fahrenheit = +prompt("Enter the Degrees of Fahrenheit");
var celsius;
celsius = (fahrenheit - 32) * 5/9;
if(fahrenheit === 0,1,2,3,4,5,6,7,8,9){
    var far =  "The "+ fahrenheit + " Fahrenhiet is equal to the " + celsius +" Celsius";
    para.innerHTML = far;
}
else{
    alert("Please put the Number")

}
}
function calsius(){
var celsius = prompt("Enter the Degrees of Celsius");
var fahrenheit;
fahrenheit = (celsius * 9/5) + 32 ;
if(celsius === 0,1,2,3,4,5,6,7,8,9){
var far = "The "+ celsius  + " Celsius is equal to the " + fahrenheit +" Fahrenhiet";
para.innerHTML = far;
}
else{
    alert("Please put the Number")
}
}
//  var promp = prompt("enter")
//  console.log(promp)

// c = (F - 32) * 5 / 9
// f = (c * 9 / 5) + 32
