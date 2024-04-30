import express from "express";


const app =  express();

app.get("/" , (req , res)=>{
    res.send("welcome to the home page")
})
app.get("/about" , (req , res)=>{
    res.send("welcome to the about page")
})


app.listen("8000", ()=>{
    console.log("port is runnig")
})