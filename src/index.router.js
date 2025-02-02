import { connectDB } from "../DB/connection.js";
import userRouter from "./modules/users/user.router.js";
import authRouter from './modules/Authentication/authentication.router.js'
import blogRouter from './modules/blogs/blog.router.js'
import cors from 'cors'
const initApp = (app,express)=>{
    connectDB();
    app.use(cors());
    app.use(express.json());
    app.use('/users',userRouter);
    app.use('/auth',authRouter);
    app.use('/blog',blogRouter);
    app.use((err,req,res,next)=>{
        return res.status(err.statusCode).json({message:err.message});
    });
}
export default initApp;