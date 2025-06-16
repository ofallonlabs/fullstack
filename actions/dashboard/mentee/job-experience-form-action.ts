"use server";

import { ErrorMessageType, JobExperienceFormState, JobExperienceFormSchema } from "@/definition/dashboard/mentee/job-experience-schema";
import { revalidatePath } from "next/cache";


export default async function jobExperienceFormAction(prevState: JobExperienceFormState, formData: FormData) {
    const {success, error, data} = JobExperienceFormSchema.safeParse({
        status: formData.get("status"),
        title: formData.get("title"),
        employer: formData.get("employer"),
    });

    if(!success){
        return { 
                error:
                    error?.issues?.map((zerror)=>{
                        return {
                            target: zerror.path.length > 0 ? zerror?.path?.[0].toString() : 'root',
                            message: zerror?.message ?? ""
                    }
                    })
            };
    }
 
    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





