const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    username: { type: String, },
    email: { type: String, required: true, },
    password: { type: String, required: true }
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel