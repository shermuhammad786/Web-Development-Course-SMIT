import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../Controller/HotelController.js";

const hotelRoutes = express.Router();
//CREATE HOTEL
hotelRoutes.post("/hotel", createHotel)

//UPDATE HOTEL
hotelRoutes.put("/updatehotel/:_id", updateHotel)

//DELETE HOTEL
hotelRoutes.delete("/deletehotel/:_id", deleteHotel)

// GET A HOTEL
hotelRoutes.get("/gethotel/:_id", getHotel)

// GET ALL HOTELS
hotelRoutes.get("/getallhotels", getAllHotels)

export default hotelRoutes