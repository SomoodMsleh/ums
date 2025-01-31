import blogModel from "../../../DB/model/blog.model.js";
import { Router } from "express";
import authentication from "../../middleware/authentication.js"
const router = Router();
router.get('/',async(req,res)=>{
    try{
        const blogs = await blogModel.findAll({attributes:['title','description']});
        return res.status(200).json({massage:"successfully", blogs});
    }catch(error){
        return res.status(500).json({massage:"server error",error})
    }
});

router.post('/',authentication(),async(req,res)=>{
    try{
        const {title,description} = req.body;
        const blog = await blogModel.create({title,description});
        return res.status(201).json({massage:"successfully",blog});
    }catch(error){
        return res.status(500).json({massage:"server error",error})
    }
});

export default router; 