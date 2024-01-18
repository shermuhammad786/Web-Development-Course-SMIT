var userdata = JSON.parse(localStorage.getItem("userDetails")) ?? [];
var loginEmail = JSON.parse(localStorage.getItem("email")) ?? [];
    userdata.find(v =>{ 
        if(loginEmail == v.email){
         fName = v.firstName;
         lName = v.lastName;
    }
})
let uname = document.getElementById("abcc");
uname.innerHTML = fName;
var div = document.getElementById("div");
function updateImage(){
    // div.background = `url(./user.png)`
    for(var v of userdata){ 
        if(loginEmail == v.email){
            div.style.background = `url(${v.image})`
            div.style.backgroundRepeat = "no-repeat"
            div.style.backgroundSize = "cover"
        }
    }
}
updateImage()
function goToEditProfile(){
    window.location.replace("../editProfile/editProfile.html")
}