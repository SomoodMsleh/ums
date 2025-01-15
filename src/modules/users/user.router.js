import { Router } from "express";
import userModel from "../../../DB/model/user.model.js";
import jwt from "jsonwebtoken";
const router = Router();

router.get('/', async(req,res)=>{
    const users = await userModel.findAll({
        attributes:['userName','email']
    });
    return res.status(200).json({massage:"successfully", users});
});

router.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    const {token} = req.headers;
    const decoded = jwt.verify(token,'somoodedwan');
    if(decoded.role != 'Admin'){
        return res.status(400).json({massage:"not Authorized"});
    }
    const user = await userModel.findByPk(id);
    if(user == null){
        return res.status(404).json({massage:"user not found"});
    }
    await userModel.destroy({
        where:{id:id}
    });
    return res.status(200).json({massage:"successfully"});
});


export default router;