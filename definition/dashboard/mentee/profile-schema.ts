import { z } from "zod/v4";

export enum ErrorMessageType {
    SUCCESS,
    FAILURE
}


enum AllowedCountries {
  USA = "usa",
  Canada = "canada",
}

export const MenteeProfileFormSchema = z.object({

    website : z.url({protocol: /^https?$/, hostname: z.regexes.domain, error: "Invalid URL path"})
               .optional(),

    tagline: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "Tagline is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your tagline"}).max(255, {error:"Exceeded 255 characters limit"}),

    currentjob: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "current job is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your current job"}).max(150, {error:"Exceeded 150 characters limit"}),

    bio: z.string({ 
        error: (issue) => issue.input === undefined 
            ? "bio is required" 
            : "Not a string" 
        }).trim().min(1, {error:"please enter your bio"})
        .max(500, {error: "Exceeded 500 characters limit. Please keep the bio short."}),
    
    country: z.enum(AllowedCountries, { error : 'We do not provide our services in this region' })    
                
}); 

export type MenteeProfileFormState = 
    |
        {
                errors?:{ target: string; message: string; }[],
                message?:{
                    type: ErrorMessageType,
                    content: string
                }
        }
    | undefined

export type MenteeProfileFormActionType = (prevState: MenteeProfileFormState, formData: FormData) => Promise<MenteeProfileFormState>
