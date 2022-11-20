import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SCRT, (err, userData) => {
      if (err) res.status(401).json("Invalid token");
      req.user = userData;
      next();
    });
  } else {
    res.status(401).json("You're not authenticated");
  }
};

export const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.userData.isAdmin) {
      next();
    } else {
      res.status(401).json("Unauthorized!");
    }
  });
};
export const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.userData.isAdmin) {
      next();
    } else {
      res.status(401).json("Unauthorized!");
    }
  });
};

// module.exports = { verifyToken, verifyTokenAndAuth };
