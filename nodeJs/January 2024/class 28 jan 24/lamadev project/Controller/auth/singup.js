import mongoose from "mongoose";

import { SingUpUserSchema } from "../../Models/schema/authSchema.js";
import bcrypt from "bcrypt";
// import { status } from "express/lib/response.js";

// USER SINGUP
export const singupController = async (req, res) => {
    try {
        const { username, email, password, desc } = req.body;

        // check if Username is already exists
        const existingUserName = await SingUpUserSchema.findOne({ username: username })
        if (existingUserName) {
            return res.json({
                status: false,
                message: "Username is already exists",
            })
        }

        // Check if the user Email already exists
        const existingUser = await SingUpUserSchema.findOne({ email: email });

        if (existingUser) {
            return res.json({
                status: false,
                message: "Email is  already exists",
            });
        }
       
        // User does not exist, proceed with signup
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new SingUpUserSchema({
            username: username,
            email: email,
            password: hashedPassword,
            desc: desc,
        });

        const user = await newUser.save();

        res.json({
            status: true,
            message: "User signed up successfully",
            user: user
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: false,
            message: "Internal server error",
        });
    }
};

//  UPDATE USER
export const updateUserController = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const _id = req.params._id;

        // Ensure that the provided _id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                status: false,
                message: "Invalid user ID format",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const updateUser = {
            email: email,
            username: username,
            password: hashedPassword
        };

        const updatedUser = await SingUpUserSchema.findByIdAndUpdate(_id, {
            $set: req.body
        });

        if (updatedUser) {
            res.json({
                status: true,
                message: "User Updated Successfully",
                user: updatedUser,
            });
        } else {
            res.status(404).json({
                status: false,
                message: "User not found or not updated",
            });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

//  DELETE USER
export const deleteUserController = async (req, res) => {
    try {
        const id = req.params._id;

        const deletedUser = await SingUpUserSchema.findOneAndDelete({ _id: id });

        if (deletedUser) {
            return res.json({
                status: true,
                message: "User Deleted Successfully",
            });
        } else {
            return res.json({
                status: false,
                message: "User Not Deleted",
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// get Users
export const getUser = async (req, res) => {
    try {
        const id = req.params._id;
        const getaUser = await SingUpUserSchema.findById(id)

        res.json({
            status: true,
            message: "this is users details",
            user: getaUser
        })
    } catch (error) {
        res.json({
            status: false,
            message: "user not found",
            error: error.message,
        })
    }
}

// FOLLOWINGS

export const followings = async (req, res) => {
    try {
        const id = req.params._id;
        const sher = await SingUpUserSchema.findById(id);
        const faiz = await SingUpUserSchema.findById(req.body.faizId);

        if (id === req.body.faizId) {
            return res.status(400).json({
                status: false,
                message: "You can't follow yourself",
            });
        }

        if (!sher.followers.includes(req.body.faizId)) {
            await sher.updateOne({ $push: { followers: req.body.faizId } });
            await faiz.updateOne({ $push: { followings: id } });

            return res.status(200).json({
                status: true,
                user: sher,
                message: "Faiz followed Sher successfully",
            });
        } else {
            return res.status(400).json({
                status: false,
                message: "You already follow Sher",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            error: error.message,
        });
    }
};


// UN FOLLWOINGS
export const unFollowings = async (req, res) => {
    try {
        const id = req.params._id;
        const sher = await SingUpUserSchema.findById(id);
        const faiz = await SingUpUserSchema.findById(req.body.faizId);

        if (id === req.body.faizId) {
            return res.status(400).json({
                status: false,
                message: "You can't un follow yourself",
            });
        }

        if (sher.followers.includes(req.body.faizId)) {
            await sher.updateOne({ $pull: { followers: req.body.faizId } });
            await faiz.updateOne({ $pull: { followings: id } });

            return res.status(200).json({
                status: true,
                user: sher,
                message: "Faiz unfollowed Sher successfully",
            });
        } else {
            return res.status(400).json({
                status: false,
                message: "faiz already unfollow Sher",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: false,
            error: error.message,
        });
    }
};
