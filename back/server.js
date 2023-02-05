const express = require("express");
const cors = require("cors");
const menuRouter = require("./routes/menuRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", menuRouter);

module.exports = app;