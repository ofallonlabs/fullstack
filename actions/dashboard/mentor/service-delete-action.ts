"use server";

import { archiveMentorService } from "@/lib/db/services/mentor-services-service"; 
import { getMentor } from "@/lib/db/services/mentor-service"; 
import { ErrorMessageType } from "@/definition/dashboard/mentor/service-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { redirect, RedirectType } from "next/navigation";


export default async function serviceDeleteAction(serviceId: number) {

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
 
    await archiveMentorService(mentor.id, serviceId); 

    revalidatePath(`/dashboard`);
    redirect("/dashboard/services", RedirectType.replace);


}