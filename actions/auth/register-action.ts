"use server";

import { APIError } from "better-auth/api"; 
import { MentorRegisterFormSchema, MentorRegisterFormState, ErrorMessageType} from "@/definition/UserDefinition";
import { auth } from "@/lib/auth/auth";
import { sendEmail } from "@/lib/mailing/gmail";

export default async function RegisterFormAction(extras: {callbackURL : string}, prevState:MentorRegisterFormState, formData: FormData){

    if(!formData.get("agreedto") || formData.get("agreedto") == null  || formData.get("agreedto") !== "on"){
        return {
            message: 
                {
                    type: ErrorMessageType.FAILURE,
                    content: "To register, you must agree to OMentors terms."
                }
        }
    }


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

        await auth.api.signUpEmail({
            body: {
                email,
                password,
                firstName:firstname,
                lastName:lastname,
                name:`${firstname} ${lastname}`,
                role:role,
                callbackURL: extras.callbackURL
            },
            asResponse: false 
        });

        await sendEmail({
            to:"pedram_duan5@yahoo.com",
            subject:"A new user just registered",
            text:`${firstname} ${lastname} just registered. Account Email: ${email}`
        });

        return {
            message: 
                {
                    type: ErrorMessageType.SUCCESS,
                    content: "Please check you inbox. An email verification link will be sent to your email in minutes"
                }
        }

 
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
                    content: 'something went wrong craeting your account'
                }
            } 
        }

    }


}







