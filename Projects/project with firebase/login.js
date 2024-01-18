import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, get, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlaRR8UHAu0OU2MXducVWNo2sKmiwPq4M",
  authDomain: "singup-login-project.firebaseapp.com",
  projectId: "singup-login-project",
  storageBucket: "singup-login-project.appspot.com",
  messagingSenderId: "856042990582",
  appId: "1:856042990582:web:689e2d147f8ac61e3535d7",
  measurementId: "G-G0K6ND91JK"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dataBase = getDatabase()
const auth = getAuth(app);





let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signInUser = document.querySelector("#registerUser");


signInUser.addEventListener("click", evt => {
  evt.preventDefault()
  signInWithEmailAndPassword(auth, email.value, password.value).then((Credentials) => {
    console.log(Credentials);
    alert("Sign In Successfull , diverting you to Home Page");
    location.replace("./homepage/index.html")
  })
    .catch((error) => {
      alert(error.message);
      console.log(error);
      console.log(error.massage);
    })
})