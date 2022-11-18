import express from "express";
const app = express();
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
