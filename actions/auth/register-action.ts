'use server';

import { APIError } from "better-auth/api"; 
import { MentorRegisterFormSchema, MentorRegisterFormState} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export default async function RegisterFormAction(prevState:MentorRegisterFormState, formData: FormData){

    console.log({
        email:formData.get("email"),
        password:formData.get("password"),
        role:formData.get("role"),
        firstname:formData.get("firstname"),
        lastname:formData.get("lastname"),
    });

    const {success, error, data} = MentorRegisterFormSchema.safeParse({
        email:formData.get("email"),
        password:formData.get("password"),
        role:formData.get("role"),
        firstname:formData.get("firstname"),
        lastname:formData.get("lastname"),
    });

    if(!success){
        return {errors:error?.flatten().fieldErrors};
    }

    try{
        const {email,password, firstname, lastname, role} = data;

        const response = await auth.api.signUpEmail({
            body: {
                email,
                password,
                firstName:firstname,
                lastName:lastname,
                name:`${firstname} ${lastname}`,
                role:role,
                callbackURL: "/dashboard/home"
            },
            asResponse: true 
        });

        console.log(JSON.stringify(response));
                
    }catch(error : unknown){

        if(error instanceof APIError){

            switch(error.status){

                case "UNPROCESSABLE_ENTITY":
                    return {message: "User already exists."}
                case "BAD_REQUEST":
                    return {message: "Invalid email."}
                default:
                    return {message: "Something went wrong creating your account"}        

            }

        }else if(error instanceof Error){
            return {message:`something went wrong registering-${error?.message}`};
        }else{
            return {message:`something went wrong registering`};
        }

    }


    revalidatePath("/");
    redirect("/dashboard/home",RedirectType.replace);

}







