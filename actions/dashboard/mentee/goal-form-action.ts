"use server";

import { createMenteeGoal, updateMenteeGoal } from "@/lib/db/services/mentee-goal-service"; 
import { getMentee } from "@/lib/db/services/mentee-service";
import { ErrorMessageType, MenteeGoalFormState, MenteeGoalFormSchema } from "@/definition/dashboard/mentee/goal-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export type ExtraType = { method: "ADD" } | { method: "EDIT", id: string }

export default async function goalFormAction(extras: ExtraType , prevState: MenteeGoalFormState, formData: FormData) {
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

    const {success, error, data} = MenteeGoalFormSchema.safeParse({
        title: formData.get("title"),
        description: formData.get("description"),
        exr: formData.get("exr"),
        ext: formData.get("ext"),
        exmwmpm: Number(formData.get("exmwmpm")),
        mattwot: Number(formData.get("mattwot"))    
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

    const { title, description, exr, ext, exmwmpm, mattwot } = data;

    if(extras.method == "ADD"){

        await createMenteeGoal({ title, description, menteeId: mentee.id, expectations:exr, expectedTimeline: ext, focusHpw: mattwot, meetingFrequency: exmwmpm  });

    }else if(extras.method == "EDIT" && extras.id.length > 0){
        
        await updateMenteeGoal(+extras.id, mentee.id, { title, description, expectations:exr, expectedTimeline: ext, focusHpw: mattwot, meetingFrequency: exmwmpm  });
    }

 
    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS, content: `${extras.method === "ADD" ? "Added" : "Updated"} Successfully` } };
}





