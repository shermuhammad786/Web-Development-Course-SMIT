// var num = +prompt("enter a number");
// function argument(){
    // Number = 15;
    // alert(15 - num)
// var numm = num-5;

// document.write(numm);
// numm = num - 5;
// document.write(numm)

// if(num == 5){
//     var numm = num + 5;
//     document.write("The Answer is "+ numm)
// }else if(num == 10){
//     var numm = num - 5;
//     document.write("the answer is "+numm);
// }
// }
// argument()



// 5 floor
// 2floor lift
// 7flor

// var man = 5;
// var fLift = 4;
// var sLift = 7;

// Math.abs(to convert any negative number into positive);

// if(fLift > sLift){
//     console.log("first lift coming")
// } else if(fLift < sLift){
//     console.log("second lift comming")
// }
// function qareebLift(){
//     var user = +prompt("Where is the person");
//     var lift1 = +prompt("Where is First lIft")
//     var lift2 = +prompt("Where is Second lIft")
//     var distanceLift1 = lift1 - user;
//     var distanceLift2 = lift2 - user;
//     if(Math.abs(distanceLift1) < Math.abs(distanceLift2)){
//         alert("lift1");
//     }else{
//         alert("lift2");
//     }
// }
// qareebLift();



// var num = +prompt("Enter a Number");
// if(num < 0){
//    num = num * -1;
    
// }else{
//     num;
// }
// alert(num)

function Ql(){
    var lift1 = 7;
    var lift2 = 2;
    var person = 5;
    var dL1 = lift1 - person;
    // if(dL1 < 0){
    //     dL1 = dL1 * -1;
    // }else{
    //     dL1;
    // }
    var dL2  = lift2 - person;
    // if(dL2 < 0){
    //     dL2 = dL2 * -1;
    // }else{
    //     dL2;
    // }
    if(dL1 < dL2){
        alert("lift one aa rhii hai")
    }else{
        alert("lift 2 aa rhi hia ")
    }
}
Ql();