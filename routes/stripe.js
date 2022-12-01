import express from "express";
const router = express.Router();
const KEY = process.env.STRIPE_KEY;
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51M6SReAmysRSXTA4FkEfsAxAK7hVeY52lFqD5aERMzJY1bUhZF2H4fZ4J7zrrEH4yGJjNAFum30lLVhZLKwfc0Ui007Vj9F0rn"
);
// const stripe = new Stripe(KEY);

//? CREATE PAYMENT

router.post("/payment", async (req, res) => {
  await stripe.charges.create(
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
