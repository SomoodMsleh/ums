import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
const authentication = ()=> {
    return (req,res,next)=>{
        try{
            const {token} = req.headers;
            const decoded = jwt.verify(token,'somoodedwan');
            if(decoded.role != 'Admin'){
                return next(new AppError("not Authorized",400));
            }
            req.id = decoded.id;
            next();
        }catch(error){
            return next(new AppError(`Server error: ${error.message}`, 500));
        }
        
    };
};

export default authentication;