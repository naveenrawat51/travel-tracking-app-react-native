const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = mongoose.model("Track");
const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  console.log("req: ", req.user._id);
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations) {
    res.status(422).send({ error: "you must provide name and locations!!" });
  }
});

module.exports = router;
