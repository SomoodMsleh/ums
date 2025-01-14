import { Router } from "express";
import bcryptjs from 'bcryptjs'
import userModel from "../../../DB/model/user.model.js";
import { where } from "sequelize";
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

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({
        where :{email:email}
    });
    if(user == null){
        return res.status(404).json({massage:"invalid email"});
    }
    const check = await bcryptjs.compareSync(password,user.password);
    if(check == false){
        return res.status(400).json({massage:"invalid password"});
    }
    return res.status(200).json({massage:"successfully" ,user});
});

export default router;