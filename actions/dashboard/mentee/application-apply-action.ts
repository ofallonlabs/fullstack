"use server";

import { ErrorMessageType } from "@/definition/dashboard/mentor/service-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { redirect, RedirectType } from "next/navigation";
import { createApplication } from "@/lib/db/services/application-service";
import { getMentee } from "@/lib/db/services/mentee-service";


export default async function applicationApplyAction(serviceId: number, needapproval: boolean) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role != "MENTEE") {
        return { message: {type: ErrorMessageType.FAILURE,content: "You are not allowed to perfomed this action"} };
    }   

    const mentee = await getMentee(session.user.id);

    if (!mentee) {
        return { message: {type: ErrorMessageType.FAILURE, content: "You are not allowed to perfomed this action"} };
    }      
 
    await createApplication(serviceId, mentee.id, needapproval ? "PENDING" : "ACCEPTED");

    revalidatePath(`/dashboard`);
    redirect("/dashboard/applications", RedirectType.replace);

}