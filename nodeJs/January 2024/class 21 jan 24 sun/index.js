// mbc , rounting 

import express from 'express';
import authRoues from './routes/authRoutes.js';

const app = express();

app.use("/auth" ,authRoues)



const PORT = 5000;
app.listen(PORT , ()=>{
    console.log("server chal raha hai dear at PORT "+PORT)
})