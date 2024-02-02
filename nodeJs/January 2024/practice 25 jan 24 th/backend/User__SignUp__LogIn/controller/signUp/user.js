import { Schema } from 'mongoose';
import UserModel from '../../models/user.js';

export const singUpController = async (req, res) => {
  try {
    const { userName, userEmail, userPass } = req.body
    console.log(userName, userEmail, userPass)
    if (!userName|| !userEmail || !userPass) return res.json({
      status: false,
      message: "fill missing fields"

    })
    const user = {
      userName: userName,
      email: userEmail,
      password: userPass
    };
    const isUserExist = await UserModel.findOne({ email: userEmail })
    if (isUserExist) return res.json({
      status: false,
      message: "User is alerady exits"
    })

    const saveUser = new UserModel(user);
    saveUser.save()
    res.json({
      status: true,
      message: 'User Sign Up Successfully'
    });
  } catch (error) {
    res.json({
      status: false,
      myMessage: 'schema error',
      message: error.message
    });
  }
}