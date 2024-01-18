// rest operator
// nullish == ??



var logemail = document.getElementById("logemail");
var logpass = document.getElementById("logpass");
var signemail = document.getElementById("signemail")
var signpass = document.getElementById("signpass")
var signname = document.getElementById("signname")



let signUpHandler = ()=> {
    var uname = this.signname.value;
    var uemail =  this.signemail.value;
    var upass = this.signpass.value;
    let userData = JSON.parse(localStorage.getItem("userDetail")) || [];
    // let logInEmail = JSON.parse(localStorage.getItem("userEmail")) || [];
    let emailChecker = "" 
    userData.find(element =>{
        if(element.email == uemail){
           emailChecker = "email matched"
        }
    })
    if(emailChecker == "email matched") return alert("Email is Already Exists");
    else if(!signemail.value) return alert("Please Enter Your Email");
    else if(!signname.value)  return alert("Please Enter Your Full Name");
    else if(!signpass.value)  return alert("Please Enter Your password");

    else{
    var users = {
        name:uname,
        email:uemail,
        password:upass,
        image:"",
        id:Math.random() * 100000000000,
    }
    userData.push(users)
    
    localStorage.setItem("userDetail",JSON.stringify(userData));
   alert("Sign Up Successful Now You Can LogIn")
    
    window.location.reload()
}

}

let lonInHandler = ()=>{
    let userData = JSON.parse(localStorage.getItem("userDetail")) || [];
    let userEmail = JSON.parse(localStorage.getItem("userEmail"))

    // var matching = "process"
   let findUser = userData.find(user =>{
       if(logemail.value == user.email){
        return user;
       }
    })

console.log(findUser)
    if(!findUser){
        return alert ('User Not Found !');
    }
    if(logpass.value !== findUser.password) return alert("Incorrect Password!");
    else{
    alert("log In SuccessFully , diverting your to Home page")
    location.replace("./home/home.html");
    localStorage.setItem("logInUser" , JSON.stringify(findUser))
}
}
let forgotPassword = ()=>{
    var randomNumber = Math.ceil(Math.random() * 1000000)
    alert(randomNumber)
    localStorage.setItem(resetPass);
    
    // var resetPassword = localStorage.getItem("resetPass");

}

