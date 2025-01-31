import { Router } from "express";
import { registerSchema,loginSchema } from "./authentication.validation.js";
import validation from "../../middleware/validation.js";
import { loginUser,registerUser } from "./authentication.controller.js";
const router = Router();

router.post('/',validation(registerSchema),registerUser);

router.post('/login',validation(loginSchema),loginUser);


export default router;