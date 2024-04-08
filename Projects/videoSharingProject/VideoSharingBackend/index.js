import Express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./Routes/User.js"
import videoRoutes from "./Routes/Video.js"
import commentRoutes from "./Routes/Comments.js"
import authRoutes from "./Routes/auth.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import DBConnection from "./DB_Connection/Connect.mjs";
dotenv.config()






const app = Express()
DBConnection()
// app.use(cors({
//     // origin: 'http://localhost:5173', // Adjust the port if your frontend is running on a different port
//     credentials: true
// }));
// const corsOptions = {
//     allowedHeaders: ['Content-Type'], // Allow only specified headers
//     credentials: true              // Enable sending cookies cross-origin
// };

// app.use(cors(corsOptions));



app.use(Express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // enable sending cookies cross-origin if needed
}));
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

// app.get('/setcookie', (req, res) => {
//     // Set a cookie named 'myCookie' with value 'hello'
//     res.cookie('myCookie', 'hello');
//     res.send('Cookie is set');
// });

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})
app.listen(9000, () => {
    console.log("port is running!")
})




// mongodb+srv://hafiz786:videosharingsecondProject@cluster0.9tohlre.mongodb.net/