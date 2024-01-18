// rest operator
// nullish == ??

// three types on asyncronous
// timers , domapis , promises



var logemail = document.getElementById("logemail");
var logpass = document.getElementById("logpass");
var signemail = document.getElementById("signemail")
var signpass = document.getElementById("signpass")
var signname = document.getElementById("signname")
var loginbtn = document.getElementById("loginbtn")
var signUpBtn = document.getElementById("signUpBtn")


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyCNZgk0gWThpWNPnkFXsspesyknkul_HT4",
  authDomain: "signup-login-817d9.firebaseapp.com",
  projectId: "signup-login-817d9",
  storageBucket: "signup-login-817d9.appspot.com",
  messagingSenderId: "833195972435",
  appId: "1:833195972435:web:4345328f1267648ca173a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { signOut, getAuth, onAuthStateChanged }





onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid)
    location.href("./home/home.html")
    // ...
  } else {
    // User is signed out
    window.location.href("index.html")
    // ...
  }
});

let signUpHandler = () => {
  // var uname = this.signname.value;
  // var email =  this.signemail.value;
  // var password = this.signpass.value;
  createUserWithEmailAndPassword(auth, signemail.value, signpass.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("sign up successful")
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
      // ..
    });




  // let userData = JSON.parse(localStorage.getItem("userDetail")) || [];
  // let logInEmail = JSON.parse(localStorage.getItem("userEmail")) || [];

  // with firebase
  // Import the functions you need from the SDKs you need




  // let emailChecker = "" 
  // userData.find(element =>{
  //     if(element.email == uemail){
  //        emailChecker = "email matched"
  //     }
  // })
  // if(emailChecker == "email matched") return alert("Email is Already Exists");
  // else if(!signemail.value) return alert("Please Enter Your Email");
  // else if(!signname.value)  return alert("Please Enter Your Full Name");
  // else if(!signpass.value)  return alert("Please Enter Your password");

  // else{
  // var users = {
  //     name:uname,
  //     email:uemail,
  //     password:upass,
  //     image:"",
  //     id:Math.random() * 100000000000,
  // }
  // userData.push(users)

  // localStorage.setItem("userDetail",JSON.stringify(userData));
  //    alert("Sign Up Successful Now You Can LogIn")

  // window.location.reload()
  // }

}
signUpBtn.addEventListener("click", signUpHandler)

let lonInHandler = () => {

  // with firebase 
  signInWithEmailAndPassword(auth, logemail.value, logpass.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("log in successful , diverting you to home page")
      location.href("./home/home.html");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
    });

  // let userData = JSON.parse(localStorage.getItem("userDetail")) || [];
  // let userEmail = JSON.parse(localStorage.getItem("userEmail"))

  // var matching = "process"
  // let findUser = userData.find(user => {
  //     if (logemail.value == user.email) {
  //         return user;
  //     }
  // })

  // console.log(findUser)
  // if (!findUser) {
  //     return alert('User Not Found !');
  // }
  // if (logpass.value !== findUser.password) return alert("Incorrect Password!");
  // else {
  //     alert("log In SuccessFully , diverting your to Home page")
  //     localStorage.setItem("logInUser", JSON.stringify(findUser))
  // }
}
loginbtn.addEventListener("click", lonInHandler)