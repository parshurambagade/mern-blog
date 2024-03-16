import Post from "../models/post.model.js";

export const publishPost = async (req, res) => {
  // Logic to publish a new post
  res.send("publishPost");
};

export const deletePost = async (req, res) => {
  // Logic to delete a post
  res.send("deletePost");
};

export const editPost = async (req, res) => {
  // Logic to edit a post
  res.send("editPost");
};

export const getPost = async (req, res) => {
  // Logic to get post details
    res.send("getPost");
};
