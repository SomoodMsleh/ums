import usedModel from "../../../DB/model/user.model.js";
import blogModel from "../../../DB/model/blog.model.js";
import { AppError } from "../../utils/appError.js";

export const getBlog = async(req,res)=>{

    const blogs = await blogModel.findAll({
        attributes:['title','description'],
        include:{
            model:usedModel,
            attributes:["userName"]
        }
    });
    return res.status(200).json({message:"successfully", blogs});
}

export const createBlog = async(req,res)=>{
    const {title,description} = req.body;
    const blog = await blogModel.create({title,description,UserId:req.id});
    return res.status(201).json({message:"successfully",blog});
}

export const getDetails = async(req,res,next)=>{
    const {id} = req.params;
    const blog = await blogModel.findByPk(id);
    if(blog == null){
        return next(new AppError("Blog not found",404));
    }
    return res.status(200).json({message:"successfully",blog});
};