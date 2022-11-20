import express from "express";
import { UserModel } from "../models/userModels.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const router = express.Router();

//? REGISTER ROUTE

router.post("/register", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SCRT_K
    ).toString(),
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
    const currenUser = await UserModel.findOne({
      username: req.body.username,
      // email: req.body.email,
    });
    !currenUser.username && res.status(401).json("Wrong Credential");

    const decryptedPass = CryptoJS.AES.decrypt(
      currenUser.password,
      process.env.SCRT_K
    );
    const correctPassword = decryptedPass.toString(CryptoJS.enc.Utf8);
    correctPassword !== req.body.password &&
      res.status(401).json("Wrong Credential");

    const accessToken = jwt.sign(
      {
        id: currenUser._id,
        isAdmin: currenUser.isAdmin,
      },
      process.env.JWT_SCRT,
      { expiresIn: "3d" }
    );

    const { password, email, ...others } = currenUser._doc;

    // res.status(200).json(others);
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
