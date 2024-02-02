import express from "express";
import { singupController } from "../../Controller/auth/singup.js";


const authRouter = express.Router()


// REGISTER 
authRouter.post("/register", singupController)

export { authRouter }