import { Schema } from 'mongoose';
import UserModel from '../../models/user.js';

export const getUsersController = async (req , res)=>{
    const allUsers = await UserModel.find()
    res.status(200).send(allUsers)
}