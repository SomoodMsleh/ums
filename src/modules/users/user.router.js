import { Router } from "express";
import authentication from "../../middleware/authentication.js";
import uploadFile from "../../utils/multer.js";
import { getUser,deleteUser,uploadProfilePicture } from "./user.controler.js";
import { asyncHandler } from "../../utils/catchError.js";
import validation from "../../middleware/validation.js";
import { deleteUserSchema,uploadProfilePictureSchema } from "./user.validation.js";
const router = Router();

router.get('/',authentication(),asyncHandler(getUser));

router.delete('/:id',authentication(),validation(deleteUserSchema),asyncHandler(deleteUser));

router.put("/:id",validation(uploadProfilePictureSchema),uploadFile().single("image"),uploadProfilePicture);

export default router;