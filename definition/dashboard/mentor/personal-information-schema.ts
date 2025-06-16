import { z } from "zod/v4";

export enum ErrorMessageType {
    SUCCESS,
    FAILURE
}


export const mentorPersonalInformationFormSchema = z.object({

    avatar : z.url({protocol: /^https?$/, hostname: z.regexes.domain, error: "Invalid URL path"}).optional(),

    firstname: z.string({ 
    error: (issue) => issue.input === undefined 
        ? "FirstName is required" 
        : "Not a string" 
    }).trim().min(1, {error:"please enter your first name"}).max(100, {error:"Exceeded 100 characters limit"}),

    lastname: z.string({ 
    error: (issue) => issue.input === undefined 
        ? "LastName is required" 
        : "Not a string" 
    }).trim().min(1, {error:"please enter your last name"}).max(100, {error:"Exceeded 100 characters limit"}),

}); 

export type mentorPersonalInformationFormState = 
    |
        {
                errors?:{ target: string; message: string; }[], 
                message?:{
                    type: ErrorMessageType,
                    content: string
                }
        }
    | undefined

export type mentorPersonalInformationFormActionType = (prevState: mentorPersonalInformationFormState, formData: FormData) => Promise<mentorPersonalInformationFormState>
