import  express  from "express";
import { signupController } from "../controller/authControllers.js";

const authRoues = express.Router();


authRoues.post("/signup", signupController)

export default authRoues 