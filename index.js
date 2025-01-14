import express from "express";
import { connectDB } from "./DB/connection.js";
import userRouter from "./src/modules/users/user.js";
const app = express();
app.use(express.json());
app.use('/users',userRouter);
connectDB();
app.listen(5000,()=>{
    console.log("server is running on port 5000 ...");
});