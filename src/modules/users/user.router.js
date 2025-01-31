import { Router } from "express";
import authentication from "../../middleware/authentication.js";
import uploadFile from "../../utils/multer.js";
import { getUser,deleteUser,uploadProfilePicture } from "./user.controler.js";

const router = Router();

router.get('/',authentication(),getUser);

router.delete('/:id',authentication(),deleteUser);

router.put("/:id",uploadFile().single("image"),uploadProfilePicture);

export default router;