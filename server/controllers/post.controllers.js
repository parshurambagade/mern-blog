import Post from "../models/post.model.js";
import jsonwebtoken from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { isAuthenticated } from "../middelwares/authMiddleWare.js";

export const publishPost = async (req, res) => {
    // Logic to publish a new post
    
    //check if the user is authenticated

    const { title, content } = req.body;
    const { user } = req;
    try {
        const post = new Post({ title, content, author: user._id });
        await post.save();
        res.status(201).json({ message: "Post published successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }

}



export const deletePost = async (req, res) => {
  // Logic to delete a post
    const { id } = req.params;
    const { user } = req;

    //check if the post is owned by the user
    const post = await Post.findById(id);
    if (post.author.toString() !== user._id.toString()) {
        return res.status(401).json({ message: "You are not authorized to delete this post" });
    }
    try {
        await Post.findByIdAndDelete(id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }   
        
};



export const updatePost = async (req, res) => {
  // Logic to edit a post
  const { id } = req.params;
  const {user} = req;

    //check if the post is owned by the user
    const post = await Post.findById(id);
    if (post.author.toString() !== user._id.toString()) {   
        return res.status(401).json({ message: "You are not authorized to update this post" });
    }

    const { title, content } = req.body;
    try {
        await Post.findByIdAndUpdate(id, { title, content });
        res.status(200).json({ message: "Post updated successfully" });
    }catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
};



export const viewPost = async (req, res) => {
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


export const viewMyPosts = async (req, res) => {
    // Logic to get all posts of a user
    const { user } = req;
    try {
        const posts = await Post.find({ author: user._id });
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const viewAllPosts = async (req, res) => {
    // Logic to get all posts
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
    
}
