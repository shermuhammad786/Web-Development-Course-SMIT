import express from "express";

import { singUpController } from "../controller/signUp/user.js";
import { loginController } from "../controller/login/login.js";
import { getUsersController } from "../controller/AllUsers/allUsers.js";

const authRoutes = express.Router();

authRoutes.post("/singup", singUpController);
authRoutes.post("/login", loginController);
authRoutes.get("/allUsers", getUsersController);


export default authRoutes