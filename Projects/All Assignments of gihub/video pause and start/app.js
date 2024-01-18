var video = document.getElementById("control");
var playbtn = document.getElementById("playButton")
let play = () =>{
    video.play();
    if(playbtn.innerHTML == "Play"){
        video.play();
        playbtn.innerHTML = "Pause";
    } else{
        video.pause() 
        playbtn.innerHTML = "Play";
    }
}
