import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

export const register = async (req, res) => {
  // Logic to register a new user
   const {username, email, password} = req.body;

   try{
    // Check if the user already exists
    const user = await User.findOne({email});
    if (user) {
      return res.status(400).json({message: "User already exists"});
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 12);

    // Create the new user
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        })
    await newUser.save();
    return res.status(201).json({message: "Account created successfully!"});
   }catch(err) {
    console.error(err);
    return res.status(500).json({message: "Server Error"})
   
   }
};


export const login = async (req, res) => {
  // Logic to authenticate and login user
  const {email, password} = req.body;

  try{
    // Check if the user exists
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({message: "User not found!"});
    }

    // Compare the password
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({message: "Incorrect password!"});
    }

    // Create the user token
    const token = jsonwebtoken.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
    return res.status(200).json({message: "Logged in successfully!", token, user: {id: user._id, username: user.username, email: user.email}});

}catch(err){
    console.error(err);
    res.status(500).json({message: "Server Error"})
}
};



export const logout = async (req, res) => {
  try {
    return res.status(200).json({ message: "Logged out successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

