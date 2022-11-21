import express from "express";
import Stripe from "stripe";
const router = express.Router();
const stripe = new Stripe()(process.env.STRIPE_KEY);

//? CREATE PAYMENT

router.post("/payment", async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, data) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(data);
      }
    }
  );
});

export default router;
