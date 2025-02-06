import Joi from "joi";

export const createBlogSchema = Joi.object({
    title:Joi.string().min(3).max(20).required(),
    description:Joi.string().min(10).required()
});

export const getDetailsSchema = Joi.object({
    id:Joi.number().min(1).required()
});