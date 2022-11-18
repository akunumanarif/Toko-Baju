import express from "express";
import userModel from "../models/userModels.js";

const router = express.Router();

//? REGISTER ROUTE
router.post("/register", (req, res) => {
  const newUser = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
});

export default router;
