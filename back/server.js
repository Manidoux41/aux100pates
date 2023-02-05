const express = require("express");

const menuRouter = require("./routes/menuRouter");

const app = express();
const port = process.env.SERVER_PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", menuRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`))
