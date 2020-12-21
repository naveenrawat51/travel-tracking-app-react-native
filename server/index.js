require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/AuthRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUrl =
  "mongodb+srv://naveen:naveen@cluster0.qjseg.mongodb.net/travelTrack?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance!!");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

// app.get("/", requireAuth, (req, res) => {
//   res.send(`You email: ${req.user.email}`);
// });

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
