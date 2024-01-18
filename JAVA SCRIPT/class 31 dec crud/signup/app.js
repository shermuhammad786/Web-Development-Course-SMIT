
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const login1 = document.querySelector(".login1");
const login3 = document.querySelector(".login3");

let current = 1;

login1.addEventListener("click", () => location.replace("../logIn/index.html"))
login3.addEventListener("click", () => location.replace("../logIn/index.html"))

const nextbtnFirstHandler = (event) => {
    console.log("work...")
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
};

nextBtnFirst.addEventListener("click", nextbtnFirstHandler)

const prevBtnFourtHandler = (event) => {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
};

prevBtnFourth.addEventListener("click", prevBtnFourtHandler)

const email = document.querySelector("#emailInput")
const password = document.querySelector("#passwordInput")
const firstNameInput = document.querySelector("#firstNameInput")
const lastNameInput = document.querySelector("#lastNameInput")

import { auth, createUserWithEmailAndPassword, db, doc, onAuthStateChanged, setDoc } from "../utility/firebaseconfig.js";
onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            alert("data set kr raha ho")
            await setDoc(doc(db, "users", user.uid), {
                fname: firstNameInput.value,
                lname: lastNameInput.value,
                email: email.value,
                password: password.value,
                uid: user.uid
            });
            alert("data save ho gaya hai")
            setTimeout(function () {
                alert("Your Form Successfully Signed up");
                location.replace("../home/index.html")
            }, 800);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        const uid = user.uid;
    } else {
    }
});
const submitBtnHandler = () => {
    if (!firstNameInput.value || !lastNameInput.value) {
        alert("Please fill all the fields")
    }
    else {
        alert("data aa raha hai")
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(async (userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    };
};
submitBtn.addEventListener("click", submitBtnHandler)