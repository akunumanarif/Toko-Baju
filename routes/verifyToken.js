import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    jwt.verify(token, process.env.JWT_SCRT, (err, userData) => {
      if (err) res.status(401).json("You're not authenticated");
      req.user = userData;
      next();
    });
  } else {
    res.status(401).json("You're not authenticated");
  }
};

module.exports = { verifyToken };
