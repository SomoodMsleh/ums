import bcryptjs from 'bcryptjs'
import userModel from "../../../DB/model/user.model.js";
import { sendEmail } from "../../utils/sendEmail.js";
import jwt from "jsonwebtoken";
import {AppError} from "../../utils/appError.js"

export const registerUser = async (req,res)=>{

    const {userName,email,password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 8);
    await userModel.create({userName , email , password:hashPassword});
    const html = `<div><h2>New User</h2> <p> welcome ${userName}</p></div>`
    await sendEmail(email,"Welcome",html);
    return res.status(201).json({message:"successfully"});
};

export const loginUser = async (req,res,next)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({
        where :{email:email}
    });
    if(user == null){
        return next(new AppError("invalid email",400));
    }
    const check = await bcryptjs.compareSync(password,user.password);
    if(check == false){
        return next(new AppError("invalid password",400));
    }
    const token = jwt.sign({id:user.id,name:user.userName,role:user.role}, 'somoodedwan');
    return res.status(200).json({message:"successfully" ,token});
};