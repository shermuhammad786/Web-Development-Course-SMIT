const UserModel = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const singup = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            username,
            password: hashedPassword,
            email
        });

        const user = await newUser.save();

        if (!user) {
            res.status(401).send({ message: "Something went wrong" });
        } else {
            res.send({ message: "User signed up successfully", data: user });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};



const signin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, "your-secret-key", {
            expiresIn: "10h",
        });

        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    singup,
    signin
};
