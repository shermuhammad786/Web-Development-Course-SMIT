const mongoose = require("mongoose");

const databaseUrl = "mongodb://127.0.0.1:27017/auth";

mongoose.connect(databaseUrl).then(() => {
    console.log("DB connected");
}).catch(() => {
    console.log("DB not connected");
} );

module.exports = mongoose;
