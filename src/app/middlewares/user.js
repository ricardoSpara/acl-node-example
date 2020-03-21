const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

const user = {
  id: Math.random()
    .toString(36)
    .substr(2, 12),
  email: "ricardo.jrsparapan@gmail.com",
  password: "1234",
  role: "user"
};

module.exports = (req, res, next) => {
  const token = jwt.sign(user, authConfig.secret);
  req.headers["authorization"] = "bearer " + token;
  return next();
};
