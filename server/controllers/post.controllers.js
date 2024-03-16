import Post from "../models/post.model.js";
import jsonwebtoken from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { isAuthenticated } from "../middelwares/authMiddleWare.js";

export const publishPost = async (req, res) => {
  // Logic to publish a new post
    const { title, content } = req.body;
    // const { user } = req;
    const thumbnail = req.file.thumbnail;
    const newPost = new Post({
        title,
        content,
        thumbnail,
});
    try {
        await newPost.save();
        res.status(201).json({ message: "Post created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
}



export const deletePost = async (req, res) => {
  // Logic to delete a post
   const { id } = req.params;
    try {
        await Post.findByIdAndDelete(id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};



export const editPost = async (req, res) => {
  // Logic to edit a post
  const { id } = req.params;
    const { title, content } = req.body;
    try {
        await Post.findByIdAndUpdate(id, { title, content });
        res.status(200).json({ message: "Post updated successfully" });
    }catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};



export const getPost = async (req, res) => {
  // Logic to get post details
    const { id } = req.params;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server Error" });
        }
    
};

export const getAllPosts = async (req, res) => {
    // Logic to get all posts
    const {authorization} = req.headers;
    if (!authorization) {
        return res.status(401).json({message: "You need to login first"});
    }
    try{
        const token = authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        req.user = user;
        const posts = await Post.find({user: user._id});
        res.status(200).json(posts);
    
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}
