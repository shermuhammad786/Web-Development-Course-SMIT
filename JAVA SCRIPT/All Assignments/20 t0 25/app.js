//  var replas = "My City is Hyderabad Hyderabad";
// console.log(replas.replace("Hyderabad", "Islamabad"))

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) == "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);
//     }
// }
// console.log(message)

// var num = 1234.345;
// var convrt = num.toString().split("")
// var index = convrt.indexOf(".")
// convrt.splice(index, 1)
// console.log(convrt.join(""))

// var userName = prompt("Enter you Name");
// // var name = userName.split("");
// // console.log(name)
// for (var i = 0; i < userName.length; i++) {
//     if (userName[i] == "," || userName[i] == "!" || userName[i] == "@" || userName[i] == ".") {
//         alert("Please Enter a valid Name")
//     }
// }

// var password = prompt("enter your Password");
// if (password[0] == Number(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
//     alert("number")
// } else if (password.length < 6) {
//     alert("password is to short");
// }





// var count = 0;
// var text = "The quick brown fox jumps over the lazy dog";
// for (i = 0; i < text.length; i++) {
//     var textt = text.slice(i, i + 3).toLowerCase() == "the"
//     if (textt) {
//         ++count
//     }

//     // if(text){
//     // }
//     // if (text.slice(i, i + 3).toLowerCase() == "the") {
//     // }
//     // console.log(text.slice(i, i + 3).toLowerCase() == "the")
// }
// console.log("The is used " + count + " Times")


// var today = new Date("dec 05 2015 22:32:23")
// var laterDate = new Date("jun 18 2015")
// var currentDate = (today.getTime() - laterDate.getTime()) / (1000 * 60 * 60 * 24)
// console.log(currentDate.toFixed(0))

// var today = new Date();
// var hours = today.getHours();
// console.log(hours - today.getHours())


// function factorial() {
//     var num = 5;
//     var num2 = 1
//     for (i = 1; i <= num; i++) {
//         num2 = num2 * i;
//     }
//     console.log(num2)
// }
// factorial();



// function startEnd(start, end) {
//     start = prompt("enter a starting Number")
//     end = prompt("enter a ending Number")
//     for (i = start; i <= end; i++) {
//         console.log(i)
//     }
// }
// startEnd()

// function caluculateHypotenuse() {
//     var base = 5.65685424949238;
//     var perpendicular = 5.65685424949238;
//     var hydpotenuse = base * base + perpendicular * perpendicular;
//     // console.log(hydpotenuse)
//     function calculateSquare() {
//         console.log(Math.sqrt(hydpotenuse));

//     }
//     calculateSquare()
// }
// caluculateHypotenuse()

// function palindrome() {
//     var name = prompt("Enter a word");
//     var reves = name.split("").reverse().join("");
//     // console.log(reves)
//     if (name == reves) {
//         console.log(`${name} is a Plindrome Word `)
//     }
//     else {
//         console.log(`${name} is not a Plindrome Word `)

//     }
// }
// palindrome()
// function palindrome() {
//     myName = "madan";

//     for (i = 0; i < myName.length; i++) {
//         // var word = myName[i]
//         console.log(myName[i].split())
//         // if (myName == word) {
//         //         console.log("ok")
//         //     }
//         }
// }
// palindrome()




// function firstLetterUpperCase(){
//     // var sentence = ["the","quick","brown","fox","jumps","over","the","lazy","dog"];
// var sentence = "the quick brown fox jumps over the lazy dog";
// var sentence = sentence.split(" ")
//     // var cap = sentence[0][0].toUpperCase() + sentence[0].slice(1)
//     // var cap1 = sentence[1][0].toUpperCase() + sentence[1].slice(1)
//     // var cap2 = sentence[2][0].toUpperCase() + sentence[2].slice(1)
//     // var cap3 = sentence[3][0].toUpperCase() + sentence[3].slice(1)
//     // console.log(`${cap} ${cap1} ${cap2} ${cap3}`) 
//     var cap = "";
//     for (i = 0;i < sentence.length;i++){
//          cap += sentence[i][0].toUpperCase() + sentence[i].slice(1)
//          cap += " "
//         }
//     console.log(cap.split(" ").join(" "))
// }
// firstLetterUpperCase();

// var sentence = "the quick brown fox jumps over the lazy dog";
// console.log(sentence.split(" "))



// function findingLargeWord(){
//     var largeword = "";
//     var name = "web development tutorial ";
//     name = name.split(" ")
//     for(i = 0;i<name.length;i++){
//         if(name[i].length > largeword.length){
//             largeword = name[i]
//         }
//     }
//     console.log(largeword)

// }
// findingLargeWord();

// var leter = prompt("enter a letter")

function findingLetter(){
    var count = 0;
   var letter = "i"
    var sentence = "the quick ibrowin foxi jumps ova";
    sentence=sentence.split('')
    console.log(sentence)
    var find = sentence.find((findlet) =>{
        if(letter == findlet){
            console.log(count++)
        }
        // else{
        //     console.log("not find")
        // }
    })


    // for(i = 0;i<sentence.length;i++){
    //     if(sentence[i] == letter){
            
    //         console.log(letter +" is in this sentence is comming " + i +"times")
    //         break
            
    //     }
    //     // else{
    //     //     console.log("not")
    //     // }
        
    // }
}
findingLetter()
