function start(){
    
    var ball1 = document.getElementById("ball_1");
    var ball2 = document.getElementById("ball_2");
    var ball3 = document.getElementById("ball_3");
    var ball4 = document.getElementById("ball_4");
    var ball5 = document.getElementById("ball_5");
    var stick1 = document.getElementById("stick_1")
    var stick2 = document.getElementById("stick_2")
    var btn = document.getElementById("btn")
    btn.disabled = "true"

//                    sticks
    stick1.style.animationDuration = "0.7s"
    stick1.style.animationTimingFunction = "ease";
    stick1.style.animationDirection = "alternate";
    stick1.style.animationIterationCount = "infinite"

    stick2.style.animationDuration = "0.7s"
    stick2.style.animationTimingFunction = "ease-in-out";
    stick2.style.animationDirection = "alternate-reverse";
    stick2.style.animationIterationCount = "infinite"
    stick2.style.animationDelay = "0.8s";

                    //          balls
    
    ball1.style.animationDuration = "0.7s"
    ball1.style.animationTimingFunction = "ease-in-out";
    ball1.style.animationDirection = "alternate";
    ball1.style.animationIterationCount = "infinite"
    ball1.style.animationDelay = "1s";

    

    ball2.style.animationDuration = "0.7s"
    ball2.style.animationTimingFunction = "ease-in-out";
    ball2.style.animationDirection = "alternate";
    ball2.style.animationIterationCount = "infinite"
    ball2.style.animationDelay = "0.8s";


    ball3.style.animationDuration = "0.7s"
    ball3.style.animationTimingFunction = "ease-in-out";
    ball3.style.animationDirection = "alternate";
    ball3.style.animationIterationCount = "infinite"
    ball3.style.animationDelay = "1.5s";


    ball4.style.animationDuration = "0.7s"
    ball4.style.animationTimingFunction = "ease-in-out";
    ball4.style.animationDirection = "alternate";
    ball4.style.animationIterationCount = "infinite"
    ball4.style.animationDelay = "1.7s";


    ball5.style.animationDuration = "0.7s"
    ball5.style.animationTimingFunction = "ease-in-out";
    ball5.style.animationDirection = "alternate";
    ball5.style.animationIterationCount = "infinite"



}