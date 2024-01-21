const express = require("express");

const routes = express.Router();
const controller = require("../controller/user")

routes.post("/signup", controller.singup)
routes.post("/signin", controller.signin)

module.exports = routes