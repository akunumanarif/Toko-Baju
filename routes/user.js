import express from "express";
import { route } from "express/lib/router";
import { UserModel } from "../models/userModels.js";
import { verifyTokenAndAuth } from "../routes/verifyToken.js";
const router = express.Router();

//? Update Route

router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SCRT_K
    ).toString();
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    const { password, ...others } = updatedUser._doc;
    res.status(202).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? Delete Route

router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
