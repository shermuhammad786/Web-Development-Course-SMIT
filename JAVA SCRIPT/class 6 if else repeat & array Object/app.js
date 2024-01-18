// // if(paranthesis){
// //     excution
// // }

// var mybike = {
//     name:"cd70",
//     company:"express",
//     color:"black",
//     model:"2020"
// }
// mybike[prompt("which property do you want to see")]
// // for check
// // console.log(mybike['model'])

// // for change value
// // mybike.company = "honda";


var myCar = {
    name:"Corolla",
    model:"Civic",
    color:["black","red","blue"],
    year:"2023",
    hybirdKey:true,
    drive: function(){
        console.log("please drive safely because my car is very sensitive")
    },
    stop: function(){
        console.log("Bhai jan ap ko shayad car chalana nhiii aatii ap bs utroo merii car se")
    }
}
console.log(myCar.model);
console.log(myCar.color[0]);
myCar.drive();
myCar.stop();