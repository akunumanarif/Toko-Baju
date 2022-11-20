import express from "express";
import { UserModel } from "../models/userModels.js";
const router = express.Router();

// router.get("/usertest", async (req, res) => {
//   const users = await UserModel.find();
//   res.json(users);
//   //   res.send("Server is running");
// });

// router.post("/newUser", (req, res) => {
//   const username = req.body.username;
//   res.send(username);
// });

export default router;
