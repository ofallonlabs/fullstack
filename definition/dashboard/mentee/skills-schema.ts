import { z } from "zod/v4";

export enum ErrorMessageType {
    SUCCESS,
    FAILURE
}

export const SkillsFormSchema = z.object({

    name: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Skill's name is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your skill"}).max(255, {error:"Exceeded 255 characters limit"}),
 
    rating: z.number({ 
        error: (issue) => issue.input === undefined 
            ? "Skill's Rating is required" 
            : "Not a string" 
        }).min(1, {error:"Rating should be between 1 to 5"}).max(5, {error:"Rating should be between 1 to 5"}),        
}); 

export type SkillsFormState = 
    |
        {
                errors?:{ target: string; message: string; }[],
                message?:{
                    type: ErrorMessageType,
                    content: string
                }
        }
    | undefined

export type SkillsFormActionType = (prevState: SkillsFormState, formData: FormData) => Promise<SkillsFormState>
