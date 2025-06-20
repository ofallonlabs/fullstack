"use server";

import { updateUserInformation } from "@/lib/db/services/users-service"; 
import { ErrorMessageType, mentorPersonalInformationFormState, mentorPersonalInformationFormSchema } from "@/definition/dashboard/mentor/personal-information-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export default async function personalInformationFormAction(prevState: mentorPersonalInformationFormState, formData: FormData) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role != "MENTOR") {
        return { message: {type: ErrorMessageType.FAILURE,content: "You are not allowed to perfomed this action"} };
    }       

    const {success, error, data} = mentorPersonalInformationFormSchema.safeParse({
        avatar: formData.get("avatar"),
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname")
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

    const { firstname, lastname, avatar } = data;
    await updateUserInformation(session.user.id, avatar ? {firstName: firstname, lastName: lastname, image: avatar, name: `${firstname} ${lastname}`} : {firstName: firstname, lastName: lastname, name: `${firstname} ${lastname}`});    

    revalidatePath(`/`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





