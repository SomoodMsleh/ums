import {AppError} from "../utils/appError.js";
const validation = (schema)=>{
    return (req,res,next) =>{
        const result = schema.validate(req.body,{abortEarly:false});
        if(result.error){
            const errors = result.error.details.map(err => err.message).join(", ");
            return next(new AppError(`Validation error: ${errors}`,400));
        }
        next();
    };
};

export default validation;