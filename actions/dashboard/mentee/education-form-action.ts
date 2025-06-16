"use server";

import { ErrorMessageType, MenteeEducationFormState, MenteeEducationFormSchema } from "@/definition/dashboard/mentee/education-schema";
import { revalidatePath } from "next/cache";


export default async function educationFormAction(prevState: MenteeEducationFormState, formData: FormData) {
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
 
    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





