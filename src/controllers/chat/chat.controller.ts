import { Request } from 'express';
import { sendChatToGroq } from '../../services/chat/chat.service';
import logger from '../../utils/logger';

export const handleChatRequest = async (req: Request) => {
  const { messages, model = 'llama3-8b-8192' } = req.body;

  logger.info(`Chat handled with model: ${model}`);
  const reply = await sendChatToGroq(messages, model);

  return { reply };
};
