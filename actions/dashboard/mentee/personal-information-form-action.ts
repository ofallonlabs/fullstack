"use server";

import { ErrorMessageType, MenteePersonalInformationFormState, MenteePersonalInformationFormSchema } from "@/definition/dashboard/mentee/personal-information-schema";
import { revalidatePath } from "next/cache";


export default async function personalInformationFormAction(prevState: MenteePersonalInformationFormState, formData: FormData) {
    const {success, error, data} = MenteePersonalInformationFormSchema.safeParse({
        avatar: formData.get("avatar"),
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname")
    });

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
 
    revalidatePath(`/`);
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





