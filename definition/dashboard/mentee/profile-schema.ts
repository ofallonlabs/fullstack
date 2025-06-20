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
