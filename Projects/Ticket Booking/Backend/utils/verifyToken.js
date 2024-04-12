import jwt from "jsonwebtoken";
import { createError } from "./Error";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(404, "You are not Authenticated!"))

    jwt.verify(token, process.env.JWT_SECRATE, (err, user) => {
        if (err) return next(createError(403, "Token is not Valid!"))
        req.user = user;
        next()
    });
}