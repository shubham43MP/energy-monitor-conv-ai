import Joi from 'joi';

export const chatSchema = Joi.object({
  model: Joi.string().optional(),
  messages: Joi.array()
    .items(
      Joi.object({
        role: Joi.string().valid('user', 'assistant', 'system').required(),
        content: Joi.string().min(1).required(),
      })
    )
    .min(1)
    .required(),
});
