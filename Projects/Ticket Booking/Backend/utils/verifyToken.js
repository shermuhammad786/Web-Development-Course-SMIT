import jwt from "jsonwebtoken";
import { createError } from "./Error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token, "==??? token")
    if (!token) return next(createError(404, "You are not Authenticated!"))

    jwt.verify(token, process.env.JWT_SECRATE, (err, user) => {
        if (err) return next(createError(403, "Token is not Valid!"))
        req.user = user;
        next()
    });
}
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        console.log(req.user, "=>>> user")
        if (req.user.id === req.params._id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not Authorized"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        console.log(req.user)
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "You are not Authorized"))
        }
    })
}