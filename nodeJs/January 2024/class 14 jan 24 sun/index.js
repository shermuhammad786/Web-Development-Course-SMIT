// node ja

// const http = require("http");
// const url = require("url");
// const data = require("./data/data.json")

// const server = http.createServer((req , res)=>{
// console.log(req.url);
// // res.end(data)
// if(req.url == "/salam"){
//     res.end(data)
// }else{
//     res.end("url sahii likh bhai")
// }
// })

// server.listen(8000 , "127.0.0.1" , ()=>{
//     console.log("server chal raha hai")
// } )


// express js 

import  express  from "express";
const app = express();
const port = 3000;
const  url = require('url');
// let sher;
// let sherm = 'hello';
// if(sherm == 'hello'){
//     sher = "the serching is hello";
// }else if(sherm == "hi"){
//     sher = 'the searching is HI';
// }
// http:192.168.10.1:3000;

app.get('/', (req, res) => {

   res.send("hello")
    console.log(req.url)
});

app.listen(port ,()=>{
    console.log("the server is running on the port of " , port);

})