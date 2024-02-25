// mbc , rounting 

import express from 'express';
import authRoues from './routes/authRoutes.js';
import dbConnection from './utils/config.js';

// import dotenv from 'dotenv'


const app = express();
// dotenv.config()
app.use(express.json())

dbConnection()
// <<<<<<< HEAD

// app.get("/", (req, res) => {
//     res.send("hellow world")
// })
// =======
app.use("/auth", authRoues)

// >>>>>>> 4851c22ba8712bf7dff5a79bded7d80281d4a5c2



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is started at port number ${PORT}`)
})