import { SingUpUserSchema } from "../../Models/authSchema/authSchema.js";
import bcrypt from "bcrypt"

export const singupController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const singupUser = new SingUpUserSchema({
            username: username,
            email: email,
            password: hashedPassword
        })
        singupUser.save()
        res.send("user singup")
    } catch (error) {
        console.log(error.message)
    }
}