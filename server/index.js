const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo Connected");
  })
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log("Server is running!");
});
