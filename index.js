import express from "express";
const app = express();
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://numanarif:akunumanarif@cluster0.ecx0a.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connection Succesful"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json("Server start");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
