import express from "express";
import { createPost } from "../../Controller/posts/postsController.js";
const postRouter = express.Router();


//CREATE A POST
postRouter.post("/create/post" , createPost)

//UPDATE A POST
//DELETE A POST
//LIKE A POST
//GET A POST
//GET ALL POSTS   OR GET TIMELINE POSTS


export { postRouter }