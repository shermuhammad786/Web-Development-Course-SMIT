// npm i express nodemon body-parser cors

const express = require("express");
const routes = require("./routs/data");
const app = express();
const port = 4000;
const bordyparse = require("body-parser");
const cors = require('cors');
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
    console.log("Server started")
})

