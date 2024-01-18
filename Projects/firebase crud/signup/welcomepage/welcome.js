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
const image = document.querySelector("#image");
var uploadImage = "";
image.addEventListener("change" , function(e){
    const reader = new FileReader();
    reader.addEventListener("load" , ()=>{
        uploadImage = reader.result;
        var getImage = localStorage.getItem("imagee")
        userdata.find(v =>{ 
            if(loginEmail == v.email){
                v.image = uploadImage;
                localStorage.setItem("userDetails",JSON.stringify(userdata));
            }
        })      
    })
    reader.readAsDataURL(this.files[0])
    window.location.reload()
})
var div = document.getElementById("div");
function updateImage(){
    div.background = `url(./user.png)`
    for(var v of userdata){ 
        if(loginEmail == v.email){
            div.style.background = `url(${v.image})`
            div.style.backgroundRepeat = "no-repeat"
            div.style.backgroundSize = "cover"
        }
    }
}
updateImage()
function logOut(){
    alert("are you sure you want to log out")
    window.location.replace("../login.html")
    localStorage.removeItem("email")
    localStorage.removeItem("imagee")
}
function goToProfile(){
    window.location.replace("../userprofile/profile.html")
}
