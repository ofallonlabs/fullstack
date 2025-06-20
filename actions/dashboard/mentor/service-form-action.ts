"use server";

import { createMentorService, updateMentorService } from "@/lib/db/services/mentor-services-service"; 
import { getMentor } from "@/lib/db/services/mentor-service"; 
import { ErrorMessageType, addServiceFormState, addServiceFormSchema } from "@/definition/dashboard/mentor/service-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export type ExtraType = { method: "ADD" } | { method: "EDIT", id: string }

export default async function serviceFormAction(extras: ExtraType , prevState: addServiceFormState, formData: FormData) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role != "MENTOR") {
        return { message: {type: ErrorMessageType.FAILURE,content: "You are not allowed to perfomed this action"} };
    }   

    const mentor = await getMentor(session.user.id);

    if (!mentor) {
        return { message: {type: ErrorMessageType.FAILURE, content: "You are not allowed to perfomed this action"} };
    }      
    

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

    const { title, description, category, needApproval, price, qualifications, type, link } = data;    
    const serviceData = { title, description, category, type, needApproval, qualifications, calendlyEvent: link };
    if(extras.method == "ADD"){

        await createMentorService({ mentorId: mentor.id, price, ...serviceData});

    }else if(extras.method == "EDIT"){

        await updateMentorService(mentor.id, +extras.id, serviceData); 
    }

    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS, content: `${extras.method === "ADD" ? "Added" : "Updated"} Successfully` } };
}