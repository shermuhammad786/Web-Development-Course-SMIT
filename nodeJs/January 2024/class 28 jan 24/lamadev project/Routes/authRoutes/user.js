import express from "express";
import { deleteUserController, followings, getUser, singupController, unFollowings, updateUserController } from "../../Controller/auth/singup.js";


const authRouter = express.Router()


// REGISTER 
authRouter.post("/register", singupController)

//UPDATE USER
authRouter.put("/:_id", updateUserController)

//DELETE USER 
authRouter.delete("/deleteUser/:_id", deleteUserController)

// GET A USER
authRouter.get("/user/:_id", getUser)

// FOLLOW USER
authRouter.put("/user/followings/:_id", followings);

// UNFOLLOW USER
authRouter.put("/user/unfollowings/:_id", unFollowings);

export { authRouter }