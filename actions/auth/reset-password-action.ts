'use server';

import { ResetPasswordFormSchema, ResetPasswordFormState} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";
import { redirect, RedirectType } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function ResetPasswordFormAction(extras: {token: string}, prevState:ResetPasswordFormState, formData: FormData){

    const {success, error, data} = ResetPasswordFormSchema.safeParse({
        password:formData.get("password"),
        token: extras.token
    });

    if(!success){
        return {errors:error?.flatten().fieldErrors};
    }

    try{
        const {password, token} = data;

        const response = await auth.api.resetPassword({
            body: {
                token,
                newPassword:password
            },
            asResponse: true,
        });
       
    }catch(error : unknown){
        
        if(error instanceof Error){
            return {message:`something went wrong logging in-${error?.message}`};
        }else{
            return {message:`something went wrong logging in`};
        }
         
    }

    revalidatePath("/");
    redirect("/auth/login", RedirectType.replace);

}







