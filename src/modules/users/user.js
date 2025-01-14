import { Router } from "express";
import usedModel from "../../../DB/model/user.js";
const router = Router();

router.get('/',async (req,res)=>{
    const users = await usedModel.findAll();
    return res.status(200).json({massage: "successfully",users});
});

export default router;