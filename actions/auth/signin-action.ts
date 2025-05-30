'use server';

import { MentorSigninFormSchema, MentorSigninFormState} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";

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
            asResponse: true 
        });

        console.log(JSON.stringify(response));
                
    }catch(error : unknown){
        if(error instanceof Error)  
         return {message:`something went wrong logging in-${error?.message}`};
        else
         return {message:`something went wrong logging in`};
    }

}







