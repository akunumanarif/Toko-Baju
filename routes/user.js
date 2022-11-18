import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("Server is running");
});

router.post("/newUser", (req, res) => {
  const username = req.body.params;
  console.log(username);
});

export default router;
