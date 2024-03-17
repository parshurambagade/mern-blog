import User from "../models/user.model.js";
import mongoose from "mongoose";

export const getAllUsers = async (req, res) => {
  // Logic to get all users
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  // Validate ID format
if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
}

  try {
    // Query user by ID
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If user found, send response
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};
