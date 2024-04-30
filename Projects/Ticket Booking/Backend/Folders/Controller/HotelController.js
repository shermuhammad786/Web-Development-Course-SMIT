import express from "express";
import HotelModel from "../Models/HotelSchema.js";
import { createError } from "../../utils/Error.js";

// CREATE HOTEL 
export const createHotel = async (req, res, next) => {
    const newHotel = new HotelModel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}

// UPDATE HOTEL
export const updateHotel = async (req, res) => {
    try {
        const updatedHotel = await HotelModel.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true });
        res.status(200).json(updatedHotel);

    } catch (error) {
        next(error)
    }
}

// DELETE HOTEL
export const deleteHotel = async (req, res) => {
    try {
        const deletedHotel = await HotelModel.findByIdAndDelete(req.params._id);
        res.status(200).json("hotel deleted successfully");
    } catch (error) {
        next(error)
    }
}

// GET HOTEL
export const getHotel = async (req, res) => {
    try {
        const gettedHotel = await HotelModel.findById(req.params._id);
        res.status(200).json(gettedHotel);
    } catch (error) {
        next(error)
    }
}

// GET ALL HOTEL
export const getAllHotels = async (req, res, next) => {
    try {
        const gettedHotels = await HotelModel.find();
        res.status(200).json(gettedHotels);
    } catch (error) {
        next(error)
    }
}
// GET ALL HOTEL
export const countByCity = async (req, res, next) => {
    try {
        const gettedHotels = await HotelModel.find();
        res.status(200).json(gettedHotels);
    } catch (error) {
        next(error)
    }
}
// GET ALL HOTEL
export const CountByType = async (req, res, next) => {
    try {
        const gettedHotels = await HotelModel.find();
        res.status(200).json(gettedHotels);
    } catch (error) {
        next(error)
    }
}