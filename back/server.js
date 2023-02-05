const express = require("express");
const path = require('path')

const menuRouter = require("./routes/menuRouter");

const app = express();
const port = process.env.SERVER_PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", menuRouter);
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", function(_, res) {
    res.sendFile(
        path.join(__dirname, "../frontend/build/index.html"),
        function (err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
