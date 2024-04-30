import RoomsSchema from "../Models/RoomsSchema.js";
import HotelSchema from "../Models/HotelSchema.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new RoomsSchema(req.body)

    try {
        const savedRoom = await newRoom.save();
        try {
            await HotelSchema.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            });
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error)
    }
}

// UPDATE HOTEL
export const updateRoom = async (req, res) => {
    try {
        const updatedRoom = await RoomsSchema.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true });
        res.status(200).json(updatedRoom);

    } catch (error) {
        next(error)
    }
}

// DELETE Room
export const deleteRoom = async (req, res) => {
    const hotelId = req.params.hotelId;
    try {

        try {
            await HotelSchema.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params._id }
            });
        } catch (error) {
            next(error)
        }

        const deletedRoom = await RoomsSchema.findByIdAndDelete(req.params._id);
        res.status(200).json("Room deleted successfully");
    } catch (error) {
        next(error)
    }
}

// GET Room
export const getRoom = async (req, res) => {
    try {
        const gettedRoom = await RoomsSchema.findById(req.params._id);
        res.status(200).json(gettedRoom);
    } catch (error) {
        next(error)
    }
}

// GET ALL Room
export const getAllRooms = async (req, res, next) => {
    try {
        const gettedRooms = await RoomsSchema.find();
        res.status(200).json(gettedRooms);
    } catch (error) {
        next(error)
    }
}