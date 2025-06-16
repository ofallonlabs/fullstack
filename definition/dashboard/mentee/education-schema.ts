import { z } from "zod/v4";

export enum ErrorMessageType {
    SUCCESS,
    FAILURE
}

export const MenteeEducationFormSchema = z.object({

    hdl: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Hightest Educational Level is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your hightest educational level"}).max(255, {error:"Exceeded 255 characters limit"}),

    fos: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Field of Study is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your field of study"}).max(255, {error:"Exceeded 255 characters limit"}),
 
    gradyear: z.number({ 
        error: (issue) => issue.input === undefined 
            ? "Graduation Year is required" 
            : "Not a number" 
        }).min(1, {error:"please enter your graduation year"}).max(2025, {error:"Please enter a valid graduation year"}),        


    gradinstitute: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Graduation Institute is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your graduation institute"}).max(255, {error:"Exceeded 255 characters limit"}),

}); 

export type MenteeEducationFormState = 
    |
        {
                errors?:{ target: string; message: string; }[],
                message?:{
                    type: ErrorMessageType,
                    content: string
                }
        }
    | undefined

export type MenteeEducationFormActionType = (prevState: MenteeEducationFormState, formData: FormData) => Promise<MenteeEducationFormState>
