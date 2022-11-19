import express from "express";
import { UserModel } from "../models/userModels.js";
import CryptoJS from "crypto-js";

const router = express.Router();

//? REGISTER ROUTE

router.post("/register", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SCRT_K),
  });

  try {
    const createuser = await newUser.save();
    res.status(401).json(createuser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? LOGIN

router.post("/login", async (req, res) => {
  try {
    const currenUser = await UserModel.findOne({ username: req.body.username });
    !currenUser && res.status(401).json("User doesn't exist");

    const decryptedPass = CryptoJS.AES.decrypt(
      currenUser.password,
      process.env.SCRT_K
    );
    const password = decryptedPass.toString(CryptoJS.enc.Utf8);
    password !== req.body.password && res.status(401).json("Wrong Credential");

    res.status(200).json(currenUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
