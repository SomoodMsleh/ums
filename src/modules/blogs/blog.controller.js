import usedModel from "../../../DB/model/user.model.js";
import blogModel from "../../../DB/model/blog.model.js";

export const getBlog = async(req,res)=>{

    const blogs = await blogModel.findAll({
        attributes:['title','description'],
        include:{
            model:usedModel,
            attributes:["userName"]
        }
    });
    return res.status(200).json({massage:"successfully", blogs});
}

export const createBlog = async(req,res)=>{
    const {title,description} = req.body;
    const blog = await blogModel.create({title,description,UserId:req.id});
    return res.status(201).json({massage:"successfully",blog});
}