"use server";

import { upsertJobExperience, MenteeJobExperience } from "@/lib/db/services/mentee-background-service"; 
import { getMentee } from "@/lib/db/services/mentee-service";
import { ErrorMessageType, JobExperienceFormState, JobExperienceFormSchema } from "@/definition/dashboard/mentee/job-experience-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export default async function jobExperienceFormAction(prevState: JobExperienceFormState, formData: FormData) {
 
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role != "MENTEE") {
        return { message: {type: ErrorMessageType.FAILURE,content: "You are not allowed to perfomed this action"} };
    }  

    const mentee = await getMentee(session.user.id);

    if (!mentee) {
        return { message: {type: ErrorMessageType.FAILURE,content: "You are not allowed to perfomed this action"} };
    }  

    let dataToValidate : {status: boolean | null, title?: FormDataEntryValue | null, employer?: FormDataEntryValue | null} = {
        status: formData.get("status")?.toString() == "on"     
    }

    if(formData.get("status")?.toString() == "on"){
        dataToValidate = {
            title: formData.get("title"),
            employer: formData.get("employer"),
            ...dataToValidate           
        }
    }


    const {success, error, data} = JobExperienceFormSchema.safeParse(dataToValidate);

   
    if(!success){
        return { 
                errors:
                    error?.issues?.map((zerror)=>{
                        return {
                            target: zerror.path.length > 0 ? zerror?.path?.[0].toString() : 'root',
                            message: zerror?.message ?? ""
                    }
                    })
            };
    }
 
    const { status, employer, title } = data;
 

    let dataToUpdate : MenteeJobExperience = {employementStatus: status };
    if(employer){
        dataToUpdate = {...dataToUpdate, employer: employer};
    }

    if(title){
        dataToUpdate = {...dataToUpdate, title: title};
    }

    await upsertJobExperience(mentee.id, dataToUpdate); 

    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





