var num;
var number = document.getElementById("number");
function counting() {
    number.innerHTML++
}
num = setInterval(counting, 10)
setTimeout(function () {
    clearInterval(num)
}, 500)

for (i = 0; i < 99; i++) {
    counting();
}

function sendMessagehandler() {
    alert("Please contact me on my email \n sherabro141@gmail.com")
}