import dotenv from 'dotenv';
dotenv.config();

export const key = process.env.JWT_SECRET || '';
export const PORT = process.env.PORT || 3004;

export const GROQ_URL = process.env.GROQ_API_URL as string;
export const API_KEY = process.env.GROQ_API_KEY;
