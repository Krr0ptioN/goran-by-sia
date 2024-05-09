const jwt = require("jsonwebtoken");
const config = require("./config");

module.exports = function verifyToken(req, res, next) {
  const token = req.headers["Authorization"];
  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ auth: false, message: "Unauthenticated." });
    }

    req.userId = decoded.id;
    next();
  });
};
