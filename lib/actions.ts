'use server'

import { sql } from "@vercel/postgres";
const short = require('short-uuid')
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {z} from 'zod';
import { Message } from './typeDefinitions';

const FormSchema = z.object({

    name: z.string({invalid_type_error:"Please, enter a name of at least three characters."}),
    email: z.string({
        invalid_type_error:"Email is not valid.", 
        required_error:"Email is required"})
        .email(),
    phone: z.string(),
    content: z.string(),
    
});


export async function createMessage(message:Message){
    const validatedFields = FormSchema.safeParse(message)

    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Submission failed."
        }

    }

    const {name, email, phone, content} = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
   
 
    try {
        await sql`
        INSERT INTO messages (name, email, phone, content, date) VALUES (${name}, ${email}, ${phone}, ${content}, ${date} )
        `;
        return {message:"Message sent successfully!"}
    } catch (error) {

    console.log(error)
        return {error: 'Something went wrong. Please, try again.'}
        
    }finally{
        revalidatePath('/contact');
        redirect('/contact');
    }
   
}