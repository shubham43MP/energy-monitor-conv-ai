import logger from '../../utils/logger';
import { GROQ_URL, API_KEY } from '../../utils/constants';

export const sendChatToGroq = async (
  messages: unknown[],
  model: string = 'llama3-8b-8192'
) => {
  logger.info(`Sending request to Groq with model: ${model}`);

  const response = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model, messages }),
  });

  if (!response.ok) {
    const error = await response.json();
    logger.error(`Groq API responded with error: ${JSON.stringify(error)}`);
    throw new Error(error?.error?.message || 'Groq API error');
  }

  const data = await response.json();
  logger.info('Received successful response from Groq');
  return data.choices?.[0]?.message;
};
