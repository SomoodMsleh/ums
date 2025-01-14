import { Router } from "express";
import bcryptjs from 'bcryptjs'
import userModel from "../../../DB/model/user.model.js";
const router = Router();

router.get('/', async(req,res)=>{
    const users = await userModel.findAll();
    return res.status(200).json({massage:"successfully", users});
});


router.post('/',async (req,res)=>{
    const {userName,email,password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 8);
    await userModel.create({userName , email , password:hashPassword});
    return res.status(201).json({massage:"successfully"});
});


export default router;