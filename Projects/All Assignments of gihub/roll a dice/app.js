var chakka = document.querySelector("#chakka")
var player1Score = document.getElementById("current1");
var player2Score = document.getElementById("current2");
var totalp1 = document.getElementById("totalScore1")
var totalp2 = document.getElementById("totalScore2")
var rolDice = document.getElementById("rollDice")
var rolldice2 = document.getElementById("rollDice2")
var chakkaimg = document.getElementById("chakkaImg")
let currentplayer = player1Score.innerHTML

rolldice2.style.display = "none";
rolDice.style.display = "block"
let rollDice = () => {
    var randomNumber = Math.ceil(Math.random() * 6)
    chakkaimg.src = `./assests/${randomNumber}.png`
    player1Score.innerHTML = +player1Score.innerHTML + randomNumber;
    if (randomNumber == 1) {
        player1Score.innerHTML = 0
        rolDice.style.display = "none";
        rolldice2.style.display = "block"
    }


}
let rollDice2 = () => {
    var randomNumber = Math.ceil(Math.random() * 6)
    chakkaimg.src = `./assests/${randomNumber}.png`
    player2Score.innerHTML = +player2Score.innerHTML + randomNumber;
    if (randomNumber == 1) {
        player2Score.innerHTML = 0;
        rolldice2.style.display = "none";
        rolDice.style.display = "block";
    }

}
let hold = () => {
    if (rolDice.style.display == "block") {
        totalp1.innerHTML = +player1Score.innerHTML + +totalp1.innerHTML;
        rolDice.style.display = "none";
        rolldice2.style.display = "block"
        player1Score.innerHTML = 0
    }
    else if (rolDice.style.display == "none") {
        totalp2.innerHTML = +player2Score.innerHTML + +totalp2.innerHTML;
        rolldice2.style.display = "none";
        rolDice.style.display = "block"
        player2Score.innerHTML = 0
    }
    if (totalp1.innerHTML == 50) {
        alert("PLAYER ONE IS WINNER")
    }
    else if (totalp2.innerHTML == 50) {
        alert("PLAYER TWO IS WINNER")
    }

}
let newGame = () => {
    console.log("new Game")
}
