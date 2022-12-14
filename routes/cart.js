import express from "express";
// import { route } from "express/lib/router";
import { CartModel } from "../models/cartModel.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../routes/verifyToken.js";
const router = express.Router();

//? CREATE NEW CART

router.post("/", verifyTokenAndAuth, async (req, res) => {
  const newCart = new CartModel(req.body);

  try {
    const addCart = await newCart.save();
    res.status(201).json(addCart);
  } catch (error) {
    res.status(500).json(error);
  }
});
//? UPDATE PRODUCT
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(202).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? DELETE CART

router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//? GET SPESIFIC USER CART

router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await CartModel.find({ userId: req.params.userId });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? GET ALL CART

router.get("/all", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
