import { login } from "./utils/functions.mjs";

const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

const loginHandler = async () => {
    console.log("working login handler", email.value, password.value)

    const logging = await login(email.value, password.value)
    console.log(logging.data.user.email)
    // if (logging.data.user.email == "sher@gmail.com") {
    //     window.location.href = "./profile/profile.html"
    // }
    // else {
    // }
    if (logging.status) {
        alert(logging.message)
        window.location.href = "./home/index.html"
    } else {
        alert(logging.message)
    }
}
loginBtn.addEventListener('click', loginHandler)