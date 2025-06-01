'use server';

import { APIError } from "better-auth/api";
import { MentorSigninFormSchema, MentorSigninFormState} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";
import { redirect, RedirectType } from "next/navigation";
import { revalidatePath } from "next/cache";
import { sendEmail } from "@/lib/mailing/gmail";

export default async function SigninFormAction(prevState:MentorSigninFormState, formData: FormData){

    const {success, error, data} = MentorSigninFormSchema.safeParse({
        email:formData.get("email"),
        password:formData.get("password")
    });

    if(!success){
        return {errors:error?.flatten().fieldErrors};
    }

    try{
        const {email,password} = data;

        const response = await auth.api.signInEmail({
            body: {
                email,
                password
            },
            asResponse: true,

        });

        await sendEmail({
            to: "pedram_duan5@yahoo.com",
            subject:"testing email functionality",
            text: `test email`
        });

        console.log(JSON.stringify(response));
                
    }catch(error : unknown){
        
        if(error instanceof APIError){

            switch(error.status){

                case "UNAUTHORIZED":
                    return {message: "User not found."}
                case "BAD_REQUEST":
                    return {message: "Invalid email."}
                default:
                    return {message: "Something went wrong logging in"}        

            }

        }else if(error instanceof Error){
            return {message:`something went wrong logging in-${error?.message}`};
        }else{
            return {message:`something went wrong logging in`};
        }
         
 
    }

    revalidatePath("/");
    redirect("/dashboard/home",RedirectType.replace);

}







