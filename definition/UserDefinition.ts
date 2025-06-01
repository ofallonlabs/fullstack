import {z} from "zod";

export const MentorRegisterFormSchema = z.object({
    role: z.enum(["MENTEE", "MENTOR"],{message: "Invalid role selected"}),
    email:z.string().trim().email({message:"please enter a valid email address"}),
    password:z.string().trim().min(8,{message:"password must contain at least 8 characters"}),
    firstname:z.string().trim().min(1,{message:"please enter your first name"}),
    lastname:z.string().trim().min(1,{message:"please enter your first name"}),
}); 

export const MentorSigninFormSchema = z.object({
    email:z.string().trim().email({message:"please enter a valid email address"}),
    password:z.string().trim().min(1,{message:"please enter the password"})
}); 

export const ForgotPasswordFormSchema = z.object({
    email:z.string().trim().email({message:"please enter a valid email address"})
}); 


export const ResetPasswordFormSchema = z.object({
    password:z.string().trim().min(8,{message:"password must contain at least 8 characters"}),
    token: z.string().trim().min(1,{message:"empty token"}),
}); 


export type MentorRegisterFormState = 
    |
        {
                errors?:{
                    email?:string[],
                    password?:string[],
                    role?:string[],
                    firstname?:string[],
                    lastname?:string[] 
                },
                message?:string
        }
    | undefined


export type MentorSigninFormState = 
    |
        {
                errors?:{
                    email?:string[],
                    password?:string[]
                },
                message?:string
        }
    | undefined


export type ForgotPasswordFormState = 
    |
        {
                errors?:{
                    email?:string[]
                },
                message?:string
        }
    | undefined



export type ResetPasswordFormState = 
    |
        {
                errors?:{
                    password?:string[],
                    token?:string[],
                },
                message?:string
        }
    | undefined



export type RegisterFormActionType = (prevState: MentorRegisterFormState, formData: FormData) => Promise<MentorRegisterFormState>
export type SigninFormActionType = (prevState: MentorSigninFormState, formData: FormData) => Promise<MentorSigninFormState>
export type ForgotPasswordFormActionType = (prevState: ForgotPasswordFormState, formData: FormData) => Promise<ForgotPasswordFormState>
export type ResetPasswordFormActionType = (prevState: ResetPasswordFormState, formData: FormData) => Promise<ResetPasswordFormState>
