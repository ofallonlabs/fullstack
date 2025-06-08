"use server";

import { ResetPasswordFormSchema, ResetPasswordFormState, ErrorMessageType} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";
import { redirect, RedirectType } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function ResetPasswordFormAction(extras: {token: string, callbackURL: string}, prevState:ResetPasswordFormState, formData: FormData){

    const {success, error, data} = ResetPasswordFormSchema.safeParse({
        password:formData.get("password"),
        token: extras.token
    });

    if(!success){
        return {errors:error?.flatten().fieldErrors};
    }

    try{
        const {password, token} = data;

        await auth.api.resetPassword({
            body: {
                token,
                newPassword:password
            },
            asResponse: false,
        });
       
    }catch(error : unknown){
        
        if(error instanceof Error){

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
                        content: 'something went wrong sending resetting password'
                    }
                } 
        }
         
    }

    revalidatePath("/");
    redirect(extras.callbackURL, RedirectType.replace);

}







