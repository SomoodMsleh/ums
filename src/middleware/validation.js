import {AppError} from "../utils/appError.js";
const validation = (schema)=>{
    return (req,res,next) =>{
        const inputData = {...req.body,...req.params};
        const validateResults = schema.validate(inputData,{abortEarly:false});
        if(validateResults?.error){
            return next(new AppError(validateResults.error,400));
        }
        next();
    };
};



export default validation;