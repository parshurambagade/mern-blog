import User from "../models/user.model.js";

export const register = async (req, res) => {
  // Logic to register a new user
  res.send("Register");
};

export const login = async (req, res) => {
  // Logic to authenticate and login user
  res.send("Login");
};

export const logout = async (req, res) => {
  // Logic to logout user
  res.send("Logout");
};


