const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require('./routes/auth');

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());
  app.use("/api/auth" , authRoute);


app.listen(2000, () => {
  console.log("Backend is Running!");
});
