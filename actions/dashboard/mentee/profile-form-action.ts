"use server";
import { updateUserInformation } from "@/lib/db/services/users-service"; 
import { ErrorMessageType, MenteeProfileFormState, MenteeProfileFormSchema } from "@/definition/dashboard/mentee/profile-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export default async function profileFormAction(prevState: MenteeProfileFormState, formData: FormData) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session || session.user.role != "MENTEE") {
        return { message: {type: ErrorMessageType.FAILURE,content: "You are not allowed to perfomed this action"} };
    }

    let dataToValidate : {country: FormDataEntryValue | null, website?: FormDataEntryValue | null} = {
        country: formData.get("country")        
    }

    if(formData.get("website")){
        dataToValidate = {
            website: formData.get("website"),
            ...dataToValidate           
        }
    }

    const {success, error, data} = MenteeProfileFormSchema.safeParse(dataToValidate);
 
 
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

    const { country, website } = data;
    
    await updateUserInformation(session.user.id, website ? {country, externalURL: website} : {country});

    revalidatePath(`/`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





