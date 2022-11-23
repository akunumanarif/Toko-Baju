import express from "express";
// import { route } from "express/lib/router";
import { ProductModel } from "../models/productModel.js";
import { verifyTokenAndAdmin } from "../routes/verifyToken.js";
const router = express.Router();

//? CREATE NEW PRODUCT

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductModel(req.body);

  try {
    const addProduct = await newProduct.save();
    res.status(201).json(addProduct);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
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

//? GET ALL PRODUCTS

router.get("/all", async (req, res) => {
  try {
    let products;
    const queryNew = req.query.new;
    const queryCat = req.query.category;

    if (queryNew) {
      products = await ProductModel.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCat) {
      products = await ProductModel.find({
        categories: {
          $in: [queryCat],
        },
      });
    } else {
      products = await ProductModel.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
