import userModel from "../../../DB/model/user.model.js";
import cloudinary from "../../utils/cloudinary.js"
import {AppError} from "../../utils/appError.js"
export const getUser = async(req,res)=>{
        const users = await userModel.findAll({
            attributes:['userName','email']
        });
        return res.status(200).json({message:"successfully", users});
};

export const deleteUser = async (req,res)=>{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        if(user == null){
            return next(new AppError("user not found",404));
        }
        await userModel.destroy({
            where:{id:id}
        });
        return res.status(200).json({message:"successfully"});
    
};

export const uploadProfilePicture = async (req,res)=>{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        if(user == null){
            return next(new AppError("user not found",404));
        }
        const {secure_url} = await cloudinary.uploader.upload(req.file.path)
        .catch((error) => {
            console.log(error);
        });
        user.profilePicture = secure_url;
        await user.save();
        return res.status(200).json({message:"successfully"});
};