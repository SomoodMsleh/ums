import userModel from "../../../DB/model/user.model.js";
import cloudinary from "../../utils/cloudinary.js"

export const getUser = async(req,res)=>{
    try{
        const users = await userModel.findAll({
            attributes:['userName','email']
        });
        return res.status(200).json({massage:"successfully", users});
    }catch(error){
        return res.status(500).json({massage:"server error",error})
    }
};

export const deleteUser = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        if(user == null){
            return res.status(404).json({massage:"user not found"});
        }
        await userModel.destroy({
            where:{id:id}
        });
        return res.status(200).json({massage:"successfully"});
    }catch(error){
        return res.status(500).json({massage:"server error",error})
    }
    
};

export const uploadProfilePicture = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        if(user == null){
            return res.status(404).json({massage:"user not found"});
        }
        const {secure_url} = await cloudinary.uploader.upload(req.file.path)
        .catch((error) => {
            console.log(error);
        });
        user.profilePicture = secure_url;
        await user.save();
        return res.status(200).json({massage:"successfully"});

    }catch(error){
        return res.status(500).json({massage:"server error",error})
    }
};