import { z } from "zod/v4";

export enum ErrorMessageType {
    SUCCESS,
    FAILURE
}

export const JobExperienceFormSchema = z.object({

    status: z.boolean().default(false),

    title: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Job Title is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your job title"}).max(255, {error:"Exceeded 255 characters limit"}).optional(),
 
    employer: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Employer's name is required" 
            : "Not a string" 
        }).min(1, {error:"please enter your employer's name"}).max(255, {error:"Please enter a valid name"}).optional(),        
}); 

export type JobExperienceFormState = 
    |
        {
                errors?:{ target: string; message: string; }[],
                message?:{
                    type: ErrorMessageType,
                    content: string
                }
        }
    | undefined

export type JobExperienceFormActionType = (prevState: JobExperienceFormState, formData: FormData) => Promise<JobExperienceFormState>
