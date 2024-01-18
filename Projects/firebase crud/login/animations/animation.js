let maindivv = document.getElementById("mainDivv");
let userViews = document.getElementById("userViews");
let animationBlock = document.getElementById("animationBlock")
maindivv.style.opacity = 0;

    setTimeout(() => {
        maindivv.style.opacity = 1
        // maindivv.style.zIndex = 225 
        userViews.style.opacity = 1;
        userViews.style.zIndex = 225
        animationBlock.style.display = "none"
    }, 7000);
    // userViews.style.zIndex = 5
    // animationBlock.classList.remove("profile-card main-card")