import { createBlog,getBlog,getDetails } from "./blog.controller.js";
import { Router } from "express";
import authentication from "../../middleware/authentication.js"
import { asyncHandler } from "../../utils/catchError.js";
import validation from "../../middleware/validation.js";
import { createBlogSchema,getDetailsSchema} from "./blog.validation.js";

const router = Router();
router.get('/',asyncHandler(getBlog));

router.post('/',authentication(),validation(createBlogSchema),asyncHandler(createBlog));
router.get('/:id',validation(getDetailsSchema),asyncHandler(getDetails));

export default router; 