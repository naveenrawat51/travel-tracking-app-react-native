const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(402).send({ error: "You must be logged in." });
    }

    const { userId } = payload;

    const userData = await User.findById(userId);
    req.user = userData;
    next();
  });
};
