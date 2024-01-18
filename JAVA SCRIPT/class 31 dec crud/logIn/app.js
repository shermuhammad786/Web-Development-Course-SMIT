import { auth, onAuthStateChanged, signInWithEmailAndPassword } from "../utility/firebaseconfig.js";
const email = document.querySelector("#emailInput");
const password = document.querySelector("#passwordInput")

const loginbtn = document.querySelector("#loginbtn")

onAuthStateChanged(auth, (user) => {
    if (user) {
      location.replace("../home/index.html")
      const uid = user.uid;
    } else {
    }
});

const loginBtnHandler = () =>{
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("login Success full , diverting you to home page")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
      });
}
loginbtn.addEventListener("click" , loginBtnHandler);

window.goToSignPage = ()=>{
  window.location.replace("../signup/index.html")
}