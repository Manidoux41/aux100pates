const express = require('express');

const app = express();
const port = process.env.PORT || 5001

app.listen(() => console.log(`Listening on port: ${port}`))