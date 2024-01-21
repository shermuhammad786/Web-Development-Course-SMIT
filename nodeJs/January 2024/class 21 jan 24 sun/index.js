import express from 'express';
const app = express();


app.get("/",(req , res)=>{
    res.send("hellow world")
})





const PORT = 3000;
app.listen(PORT , ()=>{
    console.log("server chal raha hai dear at PORT "+PORT)
})