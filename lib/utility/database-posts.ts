import { sql } from "@vercel/postgres";
import { Message } from "../typeDefinitions";
const {short} = require('short-uuid')

type Props={
    name:string,
    email:string,
    content:string
}

export const postMessage = async ({message}:{message:Props}) =>{

    const {name, email, content} = message;
    const date = new Date().toISOString().split('T')[0];
    const id = short.uuid().toString();

    try {
        await sql`
        INSERT INTO messages (id, name, email, content, date) VALUES (${id}, ${name}, ${email}, ${content}, ${date} )
        `
        
    } catch (error) {
        return {message: 'Something went wrong. Please, try again.'}
        
    }
}