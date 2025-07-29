import express from 'express';
import { handleChatRequest } from '../../controllers/chat/chat.controller';
import { validateBody } from '../../middlewares/validatejoi.middleware';
import { chatSchema } from '../../utils/validation/chat.schema';
import { AuthMiddleware } from '../../middlewares/auth.middleware';
import { responseHandler } from '../../utils/responseHandler';

const chatRouter = express.Router();

chatRouter.post(
  '/chat',
  AuthMiddleware.authMiddleware,
  validateBody({ body: chatSchema }),
  responseHandler(handleChatRequest)
);

export default chatRouter;
