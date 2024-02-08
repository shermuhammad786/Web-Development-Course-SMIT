import { Schema } from "mongoose";
import { postSchema } from "../../Models/schema/postSchema.js";

//CREATE A POST
export const createPost = async (req, res) => {
    res.send("post was created")
}

//UPDATE A POST
//DELETE A POST
//LIKE A POST
//GET A POST
//GET ALL POSTS   OR GET TIMELINE POSTS