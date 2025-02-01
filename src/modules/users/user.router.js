import { Router } from "express";
import authentication from "../../middleware/authentication.js";
import uploadFile from "../../utils/multer.js";
import { getUser,deleteUser,uploadProfilePicture } from "./user.controler.js";
import { asyncHandler } from "../../utils/catchError.js";
const router = Router();

router.get('/',authentication(),asyncHandler(getUser));

router.delete('/:id',authentication(),asyncHandler(deleteUser));

router.put("/:id",uploadFile().single("image"),uploadProfilePicture);

export default router;