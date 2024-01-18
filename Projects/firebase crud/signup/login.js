var email = document.getElementById("email");
var password = document.getElementById("password");

let form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    let uemail = event.target.email.value;
    let upassword = event.target.password.value;
    let checkStatus = 0;

    localStorage.setItem("email" , JSON.stringify(uemail))
    
    
    let userdata = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    for(let v of userdata){
        if(v.email == uemail && v.password == upassword){
            checkStatus = 1;
            break;
        }
    }
    if(checkStatus == 1){
      
    // window.location.assign("./welcomepage/welcome.html")
    window.location.replace("./welcomepage/welcome.html")
       
    }
    else{
        alert("create an account")
    }
    event.preventDefault()
})
function signUpp(){
    window.location.replace("./index.html")
}