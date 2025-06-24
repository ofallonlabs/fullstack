"use server";

import { updateUserInformation } from "@/lib/db/services/users-service";
import { getMentor, updateMentorInformation } from "@/lib/db/services/mentor-service"; 
import { ErrorMessageType, mentorProfileFormState, mentorProfileFormSchema } from "@/definition/dashboard/mentor/profile-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

type ProfileFormActionDataType = {
    country: FormDataEntryValue | null, 
    website?: FormDataEntryValue | null,
    tagline?: FormDataEntryValue | null,
    currentjob?: FormDataEntryValue | null,
    bio?: FormDataEntryValue | null
}

export default async function profileFormAction(prevState: mentorProfileFormState, formData: FormData) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role != "MENTOR") {
        return { message: {type: ErrorMessageType.FAILURE, content: "You are not allowed to perfomed this action"} };
    }

    const mentor = await getMentor(session.user.id);

    if (!mentor) {
        return { message: {type: ErrorMessageType.FAILURE, content: "You are not allowed to perfomed this action"} };
    }      
  
    let dataToValidate : ProfileFormActionDataType = {
        country: formData.get("country")        
    }

    if(formData.get("website")){
        dataToValidate = {
            website: formData.get("website"),
            ...dataToValidate           
        }
    }    

    if(formData.get("tagline")){
        dataToValidate = {
            tagline: formData.get("tagline"),
            ...dataToValidate           
        }
    }     

    if(formData.get("currentjob")){
        dataToValidate = {
            currentjob: formData.get("currentjob"),
            ...dataToValidate           
        }
    }  

    if(formData.get("bio")){
        dataToValidate = {
            bio: formData.get("bio"),
            ...dataToValidate           
        }
    } 

    const {success, error, data} = mentorProfileFormSchema.safeParse(dataToValidate);

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

    const { country, website, bio, currentjob, tagline } = data;
    
    await updateUserInformation(session.user.id, { country: country, externalURL: website });
    await updateMentorInformation(mentor.id, { aboutMe: bio, currentJobTitle: currentjob, tagline: tagline });

    revalidatePath(`/`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





