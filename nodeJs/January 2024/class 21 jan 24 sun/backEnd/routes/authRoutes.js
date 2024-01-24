import express from "express";
import { loginController, signupController } from "../controller/authControllers.js";

const authRoues = express.Router();


authRoues.post("/signup", signupController)
authRoues.post("/login", loginController)

export default authRoues  