import jwt from "jsonwebtoken";
const authentication = ()=> {
    return (req,res,next)=>{
        try{
            const {token} = req.headers;
            const decoded = jwt.verify(token,'somoodedwan');
            if(decoded.role != 'Admin'){
                return res.status(400).json({massage:"not Authorized"});
            }
            req.id = decoded.id;
            next();
        }catch(error){
            return res.status(500).json({massage:"server error",error})
        }
        
    };
};

export default authentication;