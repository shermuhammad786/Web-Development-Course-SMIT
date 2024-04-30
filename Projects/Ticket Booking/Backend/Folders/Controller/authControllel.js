import { createError } from "../../utils/Error.js";
import UserSchema from "../Models/UserSchema.js";
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken";

//REGISTER A USER
export const signUpUser = async (req, res, next) => {
    const { username, password, email } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
        const newUser = new UserSchema({
            username: username,
            email: email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save()
        // const hidePassword = {...other , password}
        res.status(200).json(savedUser)
    } catch (error) {
        next(error)
    }
}

// LOGIN A USER
export const loginUser = async (req, res, next) => {
    try {
        const { username } = req.body;

        //CHECK USER AVAILABLITY
        const getUser = await UserSchema.findOne({ username: username });
        if (!getUser) return next(createError(404, "user not found"));

        // MATCHING PASSWORD
        const ComparePassword = await bcrypt.compareSync(req.body.password, getUser?.password);
        if (!ComparePassword) return next(createError(400, "Invalid Credientails"));

        // SENDING NECESSORY DETAILS
        const { password, isAdmin, ...other } = getUser?._doc;

        // SETTING UP COOKIE
        const token = JWT.sign({ id: getUser?._id, isAdmin: getUser.isAdmin }, process.env.JWT_SECRATE);

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ ...other })

    } catch (error) {
        next(error)
    }
}