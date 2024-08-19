'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button';
import { useState } from "react";
import { createMessage } from "@/lib/actions";
import { ZoomInComponent } from "../AnimatedContainer";
import { CustomInput } from "@/components/ui/CustomInput";




const formSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be characters",
    }).min(3, {
        message: "Name must be at least 3 characters.",
    }).trim(),

    email: z.string({ required_error: "Email is required" }).email(
        {
            message: "Email not valid.",
        }
    ).min(5, {
        message: "Email must be at least 5 characters.",
    }).trim(),

    phone: z.string(),

    content: z.string({ required_error: "Message is required" }),


})

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | undefined >(undefined);
    const [errors, setErrors] = useState({})


    async function myOnSubmit(values: z.infer<typeof formSchema>) {
        
        setIsLoading(true)
        
        const result = await createMessage(form.getValues())
        if(result?.errors){
            setErrors(result.errors);
            return;
        }else{
            setMessage("Message sent successfully!")
        }
        setIsLoading(false)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone:"",
            content: "",

        },
    })

  
    return (
        <div className={` w-full p-4 !h-full flex flex-col justify-center items-center`}>
            <div>
                {
                    message && <p className="text-base text-white/80">{message}</p>
                }
            </div>
            <div>
                {
                    errors && (
                        <div className="text-2xl text-red-500">
                            {
                                Object.keys(errors).map((key, i)=>(
                                    <p key={i}>
                                        {
                                            `${key}: ${errors[key as keyof typeof errors]}`
                                        }
                                    </p>
                                ))
                            }

                        </div>
                    )
                }
            </div>
            <Form  {...form} >
                <form onSubmit={form.handleSubmit(myOnSubmit)}
                    className="grid gap-4 w-full min-w-[8rem] rounded-md max-w-[20rem]">
                        <ZoomInComponent 
                        className=""
                        delay={0.2}
                        duration={1.5}
                        viewport={{ once:true }}
                        >
                        <FormDescription className="text-base sm:text-xl text-center text-bold rico">Or, fill the form and I&apos;ll reach you.</FormDescription>
                            
                        </ZoomInComponent>
                    
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <CustomInput
                                        label="Full name"
                                        required={true}
                                        type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>

                                <FormControl>
                                    <CustomInput
                                    label="Email"
                                    required={true}
                                    type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

<FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>

                                <FormControl>
                                    <CustomInput
                                    label="Phone number"
                                    required ={false}
                                    type="tel" 
                                    {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>

                                <FormControl>
                                    <Textarea
                                        placeholder="Enter your message or question if any."
                                        {...field}
                                        className="text-black/80" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading} className={`${isLoading ? "bg-gray-400" : ""}`}>Submit</Button>

                </form>

            </Form>

        </div>
    )
}

export default ContactForm