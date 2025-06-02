'use server';

import { APIError } from "better-auth/api";
import { MentorSigninFormSchema, MentorSigninFormState, ErrorMessageType} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";
import { redirect, RedirectType } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function SigninFormAction(extras: {callbackURL : string}, prevState:MentorSigninFormState, formData: FormData){

    const {success, error, data} = MentorSigninFormSchema.safeParse({
        email:formData.get("email"),
        password:formData.get("password")
    });

    if(!success){
        return {errors:error?.flatten().fieldErrors};
    }

    try{
        const {email,password} = data;

        await auth.api.signInEmail({
            body: {
                email,
                password
            },
            asResponse: false,

        });

                
    }catch(error : unknown){
        
        if(error instanceof APIError){

            return { 
                message:
                {
                    type: ErrorMessageType.FAILURE,
                    content: error.message
                }
            }

        }else if(error instanceof Error){
            return { 
                message:
                {
                    type: ErrorMessageType.FAILURE,
                    content: error.message
                }
            }
        }else{
            return { 
                message:
                {
                    type: ErrorMessageType.FAILURE,
                    content: 'something went wrong logging in'
                }
            } 
        }
         
 
    }

    revalidatePath("/");
    redirect(extras.callbackURL,RedirectType.replace);

}







