const express = require("express");
const cors = require("cors");
const menuRouter = require("./routes/menuRouter");

const app = express();
const port = process.env.SERVER_PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", menuRouter);

module.exports = app;