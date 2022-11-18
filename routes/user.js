import express from "express";

const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("Server is running");
});

router.post("/newUser", (req, res) => {
  const username = req.body.username;
  res.send(username);
});

export default router;
