"use server";

import { ErrorMessageType, mentorProfileFormState, mentorProfileFormSchema } from "@/definition/dashboard/mentor/profile-schema";
import { revalidatePath } from "next/cache";


export default async function profileFormAction(prevState: mentorProfileFormState, formData: FormData) {
    const {success, error, data} = mentorProfileFormSchema.safeParse({
        website: formData.get("website"),
        tagline: formData.get("tagline"),
        currentjob: formData.get("currentjob"),
        bio: formData.get("bio"),
        country: formData.get("country")
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
 
    revalidatePath(`/`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





