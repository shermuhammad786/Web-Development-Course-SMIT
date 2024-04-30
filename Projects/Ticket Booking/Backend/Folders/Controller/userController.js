import express from "express";
import UserModel from "../Models/UserSchema.js";
import { createError } from "../../utils/Error.js";

// UPDATE USER
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error)
    }
}

// DELETE USER
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params._id);
        res.status(200).json("User deleted successfully");
    } catch (error) {
        next(error)
    }
}

// GET USER
export const getUser = async (req, res) => {
    try {
        const gettedUser = await UserModel.findById(req.params._id);
        res.status(200).json(gettedUser);
    } catch (error) {
        next(error)
    }
}

// GET ALL USER
export const getAllUsers = async (req, res, next) => {
    try {
        const gettedUsers = await UserModel.find();
        res.status(200).json(gettedUsers);
    } catch (error) {
        next(error)
    }
}