import "dotenv/config";
import OpenAI from 'openai';

console.log('OPENAI_API_KEY loaded:', process.env.OPENAI_API_KEY ? 'YES' : 'NO');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY as string
});

export default openai;

