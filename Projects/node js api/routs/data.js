const express = require("express");
const routes = express.Router();
const data = require('../data/index.json');



routes.get("/data", async (req, res) => {
    try {
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
});

module.exports = routes;