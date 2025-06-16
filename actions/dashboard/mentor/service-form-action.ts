"use server";

import { ErrorMessageType, addServiceFormState, addServiceFormSchema } from "@/definition/dashboard/mentor/service-schema";
import { revalidatePath } from "next/cache";

export type ExtraType = { method: "ADD" } | { method: "EDIT", id: string }

export default async function serviceFormAction(extras: ExtraType , prevState: addServiceFormState, formData: FormData) {
    const {success, error, data} = addServiceFormSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        qualifications: formData.get("qualifications"),
        type: formData.get("type"),     
        category: formData.get("category"),
        price: formData.get("price"),
        link: formData.get("link"),
        needApproval: formData.get("needApproval")    
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





