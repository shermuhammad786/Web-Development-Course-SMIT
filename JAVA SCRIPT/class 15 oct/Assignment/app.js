// var persons = [
//     {
//         name:"SHER MUHAMMAD",
//         designation:"WEB DEVELOPER"
//     },
//     {
//         name:"FAIZ MUHAMMAD",
//         designation:"WEB DESIGNER"
//     },
//     {
//         name:"MUHSIN ALI",
//         designation:"UI DESIGNER"
//     }
// ]
// var count = 0;
// function pre(){
//     for(i = 0;i < persons.length;i++){
//         if(i == 1){

//             console.log(persons[0].name)
//         }
//     }
// }
// function next(){
    
    
   
//    if(count == 0){
//     count--
//     console.log( persons[count].name)
//    }
// }

var card1 = document.getElementById("one")
var card2 = document.getElementById("two")
var card3 = document.getElementById("three")

card1.style.display = "block"
            card2.style.display = "none"
            card3.style.display = "none"
function next(){
        if(card1.style.display == "block"){
            card1.style.display = "none"
            card2.style.display = "block"
            card3.style.display = "none"
        }
        else if(card2.style.display == "block"){
            card1.style.display = "none"
            card2.style.display = "none"
            card3.style.display = "block"
        }
        else if(card3.style.display == "block"){
            card1.style.display = "block"
            card2.style.display = "none"
            card3.style.display = "none"
        }
    }
function pre(){
        if(card1.style.display == "block"){
            card1.style.display = "none"
            card2.style.display = "none"
            card3.style.display = "block"
        }
        else if(card2.style.display == "block"){
            card1.style.display = "block"
            card2.style.display = "none"
            card3.style.display = "none"
        }
        else if(card3.style.display == "block"){
            card1.style.display = "none"
            card2.style.display = "block"
            card3.style.display = "none"
        }
    }