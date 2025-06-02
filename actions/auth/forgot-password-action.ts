'use server';

import { ForgotPasswordFormSchema, ForgotPasswordFormState, ErrorMessageType} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";

export default async function ForgotPasswordFormAction(prevState:ForgotPasswordFormState, formData: FormData){

    const {success, error, data} = ForgotPasswordFormSchema.safeParse({
        email:formData.get("email"),
    });

    if(!success){
        return {errors:error?.flatten().fieldErrors};
    }

    try{
        const {email} = data;

        await auth.api.forgetPassword({
            body: {
                email,
                redirectTo: `${process.env.NEXT_PUBLIC_APP_URL || ""}/auth/forgot-password/reset-password`
            },
            asResponse: false,
        });

        return {
            message: 
                {
                    type: ErrorMessageType.SUCCESS,
                    content: "Please check you inbox. A reset password link will be sent to your email in minutes"
                }
        }
                
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
                        content: 'something went wrong sending reset password link'
                    }
                } 
        }
         
    }

}







