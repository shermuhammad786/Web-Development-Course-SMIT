import { Schema } from 'mongoose';
import UserModel from '../../models/user.js';

const loginController = async (req, res) => {
    const { userEmail, userPass } = req.body
    if (!userEmail || !userPass) return res.json({
        status: false,
        message: "Please fill missing fields"
    })
    const isUserExist = await UserModel.findOne({ email: userEmail })
    if (!isUserExist) {
        res.json({
            status: false,
            message: "User Not Found",
        })
    } else if (isUserExist.password !== userPass) {
        res.json({
            status: false,
            message: "Invalid Credeintials"
        })
    }
    else {
        return res.json({
            status: true,
            message: "Login Successfully",
            data: isUserExist
        })
    }

}
export { loginController }