import bcryptjs from 'bcryptjs'
import userModel from "../../../DB/model/user.model.js";
import { sendEmail } from "../../utils/sendEmail.js";
import jwt from "jsonwebtoken";


export const registerUser = async (req,res)=>{
    try{
        const {userName,email,password} = req.body;
        const hashPassword = bcryptjs.hashSync(password, 8);
        await userModel.create({userName , email , password:hashPassword});
        const html = `<div><h2>New User</h2> <p> welcome ${userName}</p></div>`
        await sendEmail(email,"Welcome",html);
        return res.status(201).json({massage:"successfully"});
    }catch(error){
        return res.status(500).json({massage:"server error",error})
    }
};

export const loginUser = async (req,res)=>{
    try{
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
        const token = jwt.sign({id:user.id,name:user.userName,role:user.role}, 'somoodedwan');
        return res.status(200).json({massage:"successfully" ,token});
    }catch(error){
        return res.status(500).json({massage:"server error",error})
    }
};