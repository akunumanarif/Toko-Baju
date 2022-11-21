import express from "express";
// import { route } from "express/lib/router";
import { OrderModel } from "../models/orderModel.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../routes/verifyToken.js";
const router = express.Router();

//? CREATE NEW ORDER

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new CartModel(req.body);

  try {
    const addOrder = await newOrder.save();
    res.status(201).json(addOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});
//? UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(202).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? DELETE CART

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Oder has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// //? GET SPESIFIC USER CART

// router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
//   try {
//     const cart = await CartModel.find({ userId: req.params.userId });

//     res.status(200).json(cart);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //? GET ALL CART

// router.get("/all", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const carts = await CartModel.find();
//     res.status(200).json(carts);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

export default router;
