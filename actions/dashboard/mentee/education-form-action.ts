"use server";

import { upsertEducation } from "@/lib/db/services/mentee-background-service"; 
import { getMentee } from "@/lib/db/services/mentee-service";
import { ErrorMessageType, MenteeEducationFormState, MenteeEducationFormSchema } from "@/definition/dashboard/mentee/education-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export default async function educationFormAction(prevState: MenteeEducationFormState, formData: FormData) {

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



    const {success, error, data} = MenteeEducationFormSchema.safeParse({
        hdl: formData.get("hdl"),
        fos: formData.get("fos"),
        gradyear: formData.get("gradyear"),
        gradinstitute: formData.get("gradinstitute"),
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


    const { fos, gradinstitute, gradyear, hdl } = data;

    await upsertEducation(mentee.id, { highestEducationalLevel: hdl, fieldOfStudy: fos, graduationYear: gradyear, graduationInstitute: gradinstitute }); 

    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





