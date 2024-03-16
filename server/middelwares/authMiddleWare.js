//user authentication usin jwt
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
    const {authorization} = req.headers;
    if (!authorization) {
        return res.status(401).json({message: "You need to login first"});
    }
    try{
        const token = authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        req.user = user;
        next();
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
    }