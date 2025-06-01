'use server';

import { ForgotPasswordFormSchema, ForgotPasswordFormState} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";

export default async function ForgotPasswordFormAction(prevState:ForgotPasswordFormState, formData: FormData){

    const {success, error, data} = ForgotPasswordFormSchema.safeParse({
        email:formData.get("email"),
    });

    if(!success){
        return {errors:error?.flatten().fieldErrors};
    }

    try{
        const {email} = data;

        const response = await auth.api.forgetPassword({
            body: {
                email,
                redirectTo: `${process.env.NEXT_PUBLIC_APP_URL || ""}/auth/forgot-password/reset-password`
            },
            asResponse: true,
        });


        return {
            message: "Please check you inbox. A reset password link will be sent to your email in minutes"
        }
                
    }catch(error : unknown){
        
        if(error instanceof Error){
            return {message:`something went wrong logging in-${error?.message}`};
        }else{
            return {message:`something went wrong logging in`};
        }
         
    }

    revalidatePath("/");

}







