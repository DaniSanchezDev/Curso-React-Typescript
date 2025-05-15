import {streamText} from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-4-maverick:free'), // mas rapido
            // model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            // model: openrouter('deepseek/deepseek-chat-v3-0324:free'),
            // model: openrouter('google/gemini-2.0-flash-exp:free'),
            //  model: openrouter('google/gemma-3-27b-it:free'),
            prompt: prompt,
            system:'Eres un maestro barista y coctelero con 30 años de experiencia, que sirves todas las semanas a la familia real',
            // La temperatura controla lo creativa que se pone la IA
            temperature: 1
        })
        return result.textStream
        
    }
}