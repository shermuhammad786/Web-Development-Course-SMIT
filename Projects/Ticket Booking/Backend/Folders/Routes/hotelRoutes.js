import express from "express";
import { countByCity, CountByType, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../Controller/HotelController.js";
import { verifyAdmin } from "../../utils/verifyToken.js";

const hotelRoutes = express.Router();
//CREATE HOTEL
hotelRoutes.post("/hotel", verifyAdmin, createHotel)

//UPDATE HOTEL
hotelRoutes.put("/updatehotel/:_id", verifyAdmin, updateHotel)

//DELETE HOTEL
hotelRoutes.delete("/deletehotel/:_id", verifyAdmin, deleteHotel)

// GET A HOTEL
hotelRoutes.get("/gethotel/:_id", getHotel)

// GET ALL HOTELS
hotelRoutes.get("/getallhotels", getAllHotels)
hotelRoutes.get("/getallhotels/countbycity", countByCity)
hotelRoutes.get("/getallhotels/countbytype", CountByType)



export default hotelRoutes