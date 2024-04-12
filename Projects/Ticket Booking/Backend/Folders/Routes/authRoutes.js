import express from "express";
import { loginUser, signUpUser } from "../Controller/authControllel.js";
const authRoutes = express.Router();

authRoutes.post("/auth/register", signUpUser)
authRoutes.post("/auth/login", loginUser)

export default authRoutes