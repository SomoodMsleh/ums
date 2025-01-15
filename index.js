import express from "express";
import cors from 'cors'
import { connectDB } from "./DB/connection.js";
import userRouter from "./src/modules/users/user.router.js";
import authRouter from './src/modules/Authentication/authentication.router.js'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/users',userRouter);
app.use('/auth',authRouter);
connectDB();
app.listen(5000,()=>{
    console.log("server is running on port 5000 ...");
});