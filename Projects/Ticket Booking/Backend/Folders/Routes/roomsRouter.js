import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../Controller/roomsController.js";
import { verifyAdmin } from "../../utils/verifyToken.js";

const roomsRouter = express.Router();



//CREATE ROOMS IN HOTEL
roomsRouter.post("/room/:hotelId", verifyAdmin, createRoom)

//UPDATE room
roomsRouter.put("/updateroom/:_id", verifyAdmin, updateRoom)

//DELETE room
roomsRouter.delete("/deleteroom/:_id/:hotelId", verifyAdmin, deleteRoom)

// GET A room
roomsRouter.get("/getroom/:_id", getRoom)

// GET ALL roomS
roomsRouter.get("/getallrooms", getAllRooms)

export default roomsRouter