const express = require("express");
const app = express();
const PORT = 4000;
const db = require("./db/connection")
const cors = require("cors");
const routes = require("./routes/user");
app.use(cors());
app.use(express.json());

app.use("/", routes)


app.listen(PORT, () => {
    console.log("Server started")
})