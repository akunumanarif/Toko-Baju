import express from "express";
// import { route } from "express/lib/router";
import { ProductModel } from "../models/productModel.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuth,
} from "../routes/verifyToken.js";
const router = express.Router();

//? CREATE NEW PRODUCT

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductModel(req.body);

  try {
    const addProduct = await newProduct.save();
    res.status(201).json(addProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
//? UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    const { password, ...others } = updatedProduct._doc;
    res.status(202).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? DELETE PRODUCT

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//? GET SPESIFIC PRODUCT

router.get("/find/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //? Get All User Route

// router.get("/all", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const query = req.query.new;
//     const users = query
//       ? await UserModel.find().sort({ _id: -1 }).limit(5)
//       : await UserModel.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// //? Get User Statistic

// router.get("/stats", async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await UserModel.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

export default router;
