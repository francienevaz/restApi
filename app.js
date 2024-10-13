require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter.js");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));

const app = express();

app.use("/user", userRouter)

app.listen(process.env.PORT, () => {
    console.log("Server running")
})