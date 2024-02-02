import mongoose, { Types } from "mongoose";

const postSchema = new mongoose.Schema({
    PostText: {
        type:String
    },
    postImageUrl:{
        type:String
    }
})