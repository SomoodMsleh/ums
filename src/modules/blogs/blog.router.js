import { createBlog,getBlog } from "./blog.controller.js";
import { Router } from "express";
import authentication from "../../middleware/authentication.js"
import { asyncHandler } from "../../utils/catchError.js";

const router = Router();
router.get('/',asyncHandler(getBlog));

router.post('/',authentication(),asyncHandler(createBlog));

export default router; 