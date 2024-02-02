import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./User__SignUp__LogIn/authRoutes/authRoutes.js";
import dbConnection from "./User__SignUp__LogIn/utils/confing.js";
import productRoutes from "./Products/productRouter/productRouter.js";

const app = express()
app.use(express.json())
app.use(cors())


dbConnection()
// Authentication 
app.use("/auth", authRoutes)

// products 
app.use("/products", productRoutes)




const PORT = 9000
app.listen(PORT, () => {
    console.log("server is running at port number " + PORT)
})