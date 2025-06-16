import { z } from "zod/v4";

export enum ErrorMessageType {
    SUCCESS,
    FAILURE
}

enum ServiceType {
  SESSION,
  SUBSCRIPTION
}


enum ServiceCategory {
  PortfolioReview,
  ProjectReview,
  InterviewPreparation,
  MockInterview,
  ResumeReview,
  AskMeAnything,
  WeeklyMeetings,
}

export const addServiceFormSchema = z.object({

    title: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "title is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter the title"}).max(500, {error:"Exceeded 500 characters limit"}),

    description: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "description is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter the description"}).max(1000, {error:"Exceeded 10000 characters limit"}),        

    qualifications: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "qualification is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter the qualifications"}).max(1000, {error:"Exceeded 10000 characters limit"}),

    price: z.number({ 
        error: (issue) => issue.input === undefined 
            ? "qualification is required" 
            : "Not a number" 
        }).min(0, {error:"please enter a valid price"}).max(1000, {error:"please enter a valid price"}),
        
    type: z.enum(ServiceType, { error : 'Invalid service type' }),

    category: z.enum(ServiceCategory, { error : 'Invalid service category' }),

    link : z.url({protocol: /^https?$/, hostname: z.regexes.domain, error: "Invalid URL path"})
               .optional(),

    needApproval: z.boolean().default(false),
               
                
}); 

export type addServiceFormState = 
    |
        {

                errors?:{ target: string; message: string; }[],                
                message?:{
                    type: ErrorMessageType,
                    content: string
                }
        }
    | undefined

export type addServiceFormActionType = (prevState: addServiceFormState, formData: FormData) => Promise<addServiceFormState>
