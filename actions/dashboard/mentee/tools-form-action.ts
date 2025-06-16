"use server";

import { ErrorMessageType, ToolsFormState, ToolsFormSchema } from "@/definition/dashboard/mentee/tools-schema";
import { revalidatePath } from "next/cache";

export type ExtraType = { method: "ADD" } | { method: "EDIT", id: string }

export default async function toolsFormAction(extras: ExtraType , prevState: ToolsFormState, formData: FormData) {
    const {success, error, data} = ToolsFormSchema.safeParse({
        name: formData.get("name"),
        rating: formData.get("rating")
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
    return { message: {type: ErrorMessageType.SUCCESS,content: `${extras.method === "ADD" ? "Added" : "Updated"} Successfully` } };
}





