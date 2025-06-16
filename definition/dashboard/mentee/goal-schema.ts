import { z } from "zod/v4";

export enum ErrorMessageType {
    SUCCESS,
    FAILURE
}

export const MenteeGoalFormSchema = z.object({

    title: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Title is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter the goal's title"}).max(255, {error:"Exceeded 255 characters limit"}),

    description: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Description is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter the goal's description"}).max(500, {error:"Exceeded 500 characters limit"}),        

    exr: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Expected Result is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter the extected result"}).max(500, {error:"Exceeded 500 characters limit"}),  

    ext: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Expected Timeline is required" 
            : "Not a string" 
        }).min(1, {error:"please enter your expected timeline"}).max(500, {error:"Exceeded 500 characters limit"}),        

    exmwmpm: z.number({ 
        error: (issue) => issue.input === undefined 
            ? "Expected Meeting(s) Per Month is required" 
            : "Not a number" 
        }).min(1, {error:"please enter your expected meeting(s) per month"}).max(48, {error:"Please enter a valid expectation"}),

    mattwot: z.number({ 
        error: (issue) => issue.input === undefined 
            ? "Available Hours Per Week is required" 
            : "Not a number" 
        }).min(1, {error:"please enter your available hours per week"}).max(100, {error:"Please enter a valid number"}),
                
        
}); 

export type MenteeGoalFormState = 
    |
        {
                errors?:{ target: string; message: string; }[],
                message?:{
                    type: ErrorMessageType,
                    content: string
                }
        }
    | undefined

export type MenteeGoalFormActionType = (prevState: MenteeGoalFormState, formData: FormData) => Promise<MenteeGoalFormState>
