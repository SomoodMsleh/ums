import Joi from "joi";

export const deleteUserSchema = Joi.object({
    id:Joi.number().min(1).required()
});

export const uploadProfilePictureSchema = Joi.object({
    id:Joi.number().min(1).required()
});