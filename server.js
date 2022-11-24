import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import regRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import stripeRoute from "./routes/stripe.js";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection Succesful"))
  .catch((err) => console.log(err));

app.use(express.json());

//? Main Route
app.get("/", (req, res) => {
  res.json({
    message: {
      welcome: "Welcome to Toko Baju REST API",
      routes: {
        authentication: "/api/auth",
        user: "/api/user",
        products: "/api/product",
        cart: "/api/cart",
        order: "/api/order",
        checkout: "/api/checkout",
      },
    },
  });
});

//? CORS
app.use(cors());

//? ROUTES
app.use("/api/auth", regRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
