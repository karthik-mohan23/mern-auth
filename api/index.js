require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// routes
const userRoute = require("./routes/userRoute");

// we are not sure we have connected to the database so,
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running on port 3000");
    });
    console.log("connected to mongodb");
  })
  .catch((error) => console.log(error));

const app = express();

app.use("/api/user", userRoute);
