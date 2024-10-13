require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter.js");

const app = express();

app.use("/user", userRouter)

app.listen(process.env.PORT, () => {
    console.log("Server running")
})