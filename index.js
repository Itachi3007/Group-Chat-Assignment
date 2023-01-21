const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

/* Routes */
const messageRoute = require("./routes/message");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", messageRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/group_chat")
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
