import { createBlog,getBlog } from "./blog.controller.js";
import { Router } from "express";
import authentication from "../../middleware/authentication.js"

const router = Router();
router.get('/',getBlog);

router.post('/',authentication(),createBlog);

export default router; 