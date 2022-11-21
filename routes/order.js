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
  const newOrder = new OrderModel(req.body);

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

//? DELETE ORDER

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Oder has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//? GET USER ORDER

router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const order = await OrderModel.find({ userId: req.params.userId });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? GET ALL ORDER

router.get("/all", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//? GET MONTHLY INCOME

router.get("/incomes", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const incomes = await OrderModel.aggregate([
      {
        $match: { createdAt: { $gte: previousMonth } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
