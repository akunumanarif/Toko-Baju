import express from "express";
import { UserModel } from "../models/userModels.js";

const router = express.Router();

//? REGISTER ROUTE
router.post("/register", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const createuser = await newUser.save();
    res.status(401).json(createuser);
  } catch (error) {
    res.status(500).json(err);
  }
});

export default router;
