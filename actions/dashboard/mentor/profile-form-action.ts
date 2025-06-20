"use server";

import { updateUserInformation } from "@/lib/db/services/users-service";
import { getMentor, updateMentorInformation } from "@/lib/db/services/mentor-service"; 
import { ErrorMessageType, mentorProfileFormState, mentorProfileFormSchema } from "@/definition/dashboard/mentor/profile-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

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

    const { country, website, bio, currentjob, tagline } = data;
    
    await updateUserInformation(session.user.id, { country: country, externalURL: website });
    await updateMentorInformation(mentor.id, { aboutMe: bio, currentJobTitle: currentjob, tagline: tagline });

    revalidatePath(`/`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





