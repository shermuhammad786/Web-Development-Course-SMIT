const http = require("http");
const url = require("url");

const server = http.createServer((req , res)=>{
    console.log(req.url);
    if(req.url == "/toffee"){
        res.end("Salam toffee khaee ga kiya");
    }else if(req.url == "/freshup"){
        res.end("Salam freshup khaee ga kiya");
    }else{
        res.writeHead(404)
        res.end("Salam mera pass ye nhi hai");
    }
    res.end("salam bhai kiya chahye")
})

server.listen(8000 , "127.0.0.1" , ()=>{
    console.log("ha bahi server chal raha hai")
})