import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connection Succesful"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json("Server start");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
