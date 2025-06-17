"use server";

import { ErrorMessageType, MenteeProfileFormState, MenteeProfileFormSchema } from "@/definition/dashboard/mentee/profile-schema";
import { revalidatePath } from "next/cache";


export default async function profileFormAction(prevState: MenteeProfileFormState, formData: FormData) {
    const {success, error, data} = MenteeProfileFormSchema.safeParse({
        website: formData.get("website"),
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





