import express from "express";
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

export default router;
