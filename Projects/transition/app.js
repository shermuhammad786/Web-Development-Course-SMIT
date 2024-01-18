var one = document.getElementById("one");
var six = document.getElementById("six");
var five = document.getElementById("five");
var stick = document.getElementById("stick");
function stickhit(){
    stick.style.transform = "rotate(55deg)";
    stick.style.transformOrigin = "bottom";
    stick.style.transitionDuration = "0.5s";
    six.style.visibility = "hidden";
    onne();
    elementsix();
    divfive();
    six.style.visibility = "visible"; 
}
six.style.visibility = "hidden";
function elementsix(){
    six.style.backgroundColor = "grey";
    six.style.transform = "translate(0px , -500px)";
    six.style.transitionDuration = "2.8s";
    six.style.transitionDelay = "1.8s";
    six.style.visibility = "visible";
}
function divfive(){
    five.style.transform = "translate(-1700px , 500px)"
    five.style.transitionDuration = "2.5s";
    five.style.transitionDelay = "4.5s";
    five.style.visibility = "visible";
}
function onne(){
    one.style.transform = "translate(800px , 500px)"
    one.style.transitionDuration = "1.5s"
    one.style.transitionDelay = "0.35s"
    one.style.backgroundColor = "black"
    one.style.visibility = "hidden";  
}
