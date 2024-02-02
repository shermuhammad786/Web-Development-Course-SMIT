const userName = document.querySelector("#username");
const userEmail = document.querySelector("#email");
const password = document.querySelector("#password");
const signupBtn = document.querySelector("#signupBtn");
import axios from "axios";
// const axios = require("axios")



const signUpHandler = async(e)=>{
    e.preventDefault();
   const formData = {
    userName :userName.value,
    userEmail:userEmail.value,
    password:password.value,
    }
    alert(formData)
        console.log(formData)
        try {
            const user = await axios.post("http://localhost:9000/auth/singup", formData)
            console.log(user.data)
            alert("user suceesfully signup")
        } catch (error) {
            alert(error.message)
        }
}
signupBtn.addEventListener("click" , signUpHandler)