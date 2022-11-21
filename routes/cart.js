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
    const cart = await CartModel.findById(req.params.id);

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //? GET ALL PRODUCTS

// router.get("/all", async (req, res) => {
//   try {
//     let products;
//     const queryNew = req.query.new;
//     const queryCat = req.query.category;

//     if (queryNew) {
//       products = await ProductModel.find().sort({ createdAt: -1 }).limit(5);
//     } else if (queryCat) {
//       products = await ProductModel.find({
//         categories: {
//           $in: [queryCat],
//         },
//       });
//     } else {
//       products = await ProductModel.find();
//     }

//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

export default router;
