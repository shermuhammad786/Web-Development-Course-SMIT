import express from "express";
import connection from "./connectionDB.js";
import dotevn from "dotenv"
import authRoutes from "./Folders/Routes/authRoutes.js";
import hotelRoutes from "./Folders/Routes/hotelRoutes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./Folders/Routes/userRoutes.js";
import roomsRouter from "./Folders/Routes/roomsRouter.js";
const app = express()
dotevn.config()


app.use(express.json())
app.use(cookieParser())
app.use("/www.bookingapp.com/api/v1", authRoutes);
app.use("/www.bookingapp.com/api/v1", hotelRoutes);
app.use("/www.bookingapp.com/api/v1", userRoutes);
app.use("/www.bookingapp.com/api/v1", roomsRouter);


//ERROR MIDDLEWARE
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went Wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.listen("8000", () => {
    connection()
    console.log("port is running")
})

//mongodb+srv://sherabro141:ticket_bookings@ticket-booking.espxwvl.mongodb.net/