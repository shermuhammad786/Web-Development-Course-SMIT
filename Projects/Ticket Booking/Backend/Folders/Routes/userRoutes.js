import express from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../Controller/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../../utils/verifyToken.js"

const userRoutes = express.Router()

// userRoutes.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("Hello User you are logged in");
// })

// userRoutes.get("/checkuser/:_id", verifyUser, (req, res, next) => {
//     res.send("user your are logged in and you can delete your account")
// })
// userRoutes.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Admin your are logged in and you can delete all accounts")
// })

//UPDATE HOTEL
userRoutes.put("/updateuser/:_id", verifyUser, updateUser)

//DELETE User
userRoutes.delete("/deleteuser/:_id", verifyUser, deleteUser)

// GET A User
userRoutes.get("/getUser/:_id", getUser)

// GET ALL UserS
userRoutes.get("/getallusers", verifyAdmin, getAllUsers)

export default userRoutes

