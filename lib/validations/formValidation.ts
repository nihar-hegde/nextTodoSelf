import * as z from 'zod';


export const formValidation = z.object({
    title:z.string().min(3).max(50),
    
})