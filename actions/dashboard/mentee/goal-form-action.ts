"use server";

import { ErrorMessageType, MenteeGoalFormState, MenteeGoalFormSchema } from "@/definition/dashboard/mentee/goal-schema";
import { revalidatePath } from "next/cache";

export type ExtraType = { method: "ADD" } | { method: "EDIT", id: string }

export default async function goalFormAction(extras: ExtraType , prevState: MenteeGoalFormState, formData: FormData) {
    const {success, error, data} = MenteeGoalFormSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        exr: formData.get("exr"),
        ext: formData.get("ext"),
        exmwmpm: formData.get("exmwmpm"),
        mattwot: formData.get("mattwot")    
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
    return { message: {type: ErrorMessageType.SUCCESS, content: `${extras.method === "ADD" ? "Added" : "Updated"} Successfully` } };
}





