
const validation = (schema)=>{
    return (req,res,next) =>{
        const result = schema.validate(req.body,{abortEarly:false});
        if(result.error){
            return res.status(400).json({massage:"validation error",error:result.error.details})
        }
        next();
    };
};

export default validation;