import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
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

export const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.userData.id === req.params.id || req.userData.isAdmin) {
      next();
    } else {
      res.status(401).json("Unauthorized!");
    }
  });
};

// module.exports = { verifyToken, verifyTokenAndAuth };
