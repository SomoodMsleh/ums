import { Router } from "express";
import { registerSchema,loginSchema } from "./authentication.validation.js";
import validation from "../../middleware/validation.js";
import { loginUser,registerUser } from "./authentication.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
const router = Router();

router.post('/',validation(registerSchema),asyncHandler(registerUser));

router.post('/login',validation(loginSchema),asyncHandler(loginUser));


export default router;