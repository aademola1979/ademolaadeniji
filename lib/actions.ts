'use server'

import {sql} from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z} from 'zod';
import { Message } from './typeDefinitions';

const short = require('short-uuid')


const FormSchema = z.object({
    id: z.string(),
    name: z.string({invalid_type_error:"Please, enter a name of at least three characters."}),
    email: z.string({
        invalid_type_error:"Email is not valid.", 
        required_error:"Email is required"})
        .email(),
    content: z.string(),
    date: z.string()
});

const CreateMessage = FormSchema.omit({id:true, date:true});

export type State = {
    errors?: {
        name?: string[],
        email?: string[],
        content?: string[]
    };

    message?: string
}


export async function createMessage(message:Message){
    console.log('from server', message)
    const validatedFields = CreateMessage.safeParse(message)

    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Submission failed."
        }

    }

    const {name, email, content} = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];

    try {
        await sql`
        INSERT INTO messages (name, email, content) VALUES (${name}, ${email}, ${content}, ${date})
        `
    } catch (err) {
        return {message: 'Something went wrong. Please, try again.'}
    }

    revalidatePath('/contact');
    redirect('/contact');
}