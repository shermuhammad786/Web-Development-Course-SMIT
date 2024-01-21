import express, { json } from "express";
import fs from 'fs';
const app = express();
const PORT = 2000;
app.use(express.json());
let users = [];

app.post("/signup", (req, res) => {
    let { userName, userEmail, userPassword } = req.body;
    fs.readFile("./user.js", "utf-8", (err, data) => {
        const parsedData = JSON.parse(data);
        users = parsedData;
        const foundUser = users.find(user => user.userEmail === userEmail);
        const foundedUser = foundUser
        if (!foundedUser) {
            users.push({
                userName,
                userEmail,
                userPassword
            })
            fs.writeFile("./user.js", JSON.stringify(users), "utf-8", () => {
                res.json({
                    status: true,
                    message: "user sign up successfully",
                    user: foundUser
                })
            })
        } else {
            console.log(foundUser)
            res.json({
                status: false,
                message: "email is already exits",
            })
        }
    })

});

app.post('/login', (req, res) => {
    fs.readFile('./user.js', 'utf-8', (err, data) => {
        const { password, email } = req.body;
        const parsedData = JSON.parse(data)
        const users = parsedData;
        const foundUser = users.find(user => user.userEmail == email);
        if (foundUser) {
            if (foundUser.userPassword == password) {
                res.json({
                    status: true,
                    message: "logged in successfully",
                    data: foundUser
                })
            } else {
                res.json({
                    status: false,
                    message: "invalid crediential!"
                })
            }
        } else {
            res.json({
                status: false,
                message: "user not found!"
            })
        }
    })
})

app.get("/users", (req, res) => {
    fs.readFile('./user.js', 'utf-8', (err, data) => {
        const parsedData = JSON.parse(data)
        if (data) {
            res.json({
                status: true,
                message: "users found",
                data: parsedData,
            })
        } else {
            res.json({
                status: false,
                message: "please Enter Correct url",
            })
        }
    })
})

app.listen(PORT, () => {
    console.log(`server is started at Port ${PORT}`)
})
