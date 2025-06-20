"use server";

import { MenteeTools, upsertTools, getMenteeBackground } from "@/lib/db/services/mentee-background-service"; 
import { getMentee } from "@/lib/db/services/mentee-service";
import { ErrorMessageType, ToolsFormState, ToolsFormSchema } from "@/definition/dashboard/mentee/tools-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";


export type ExtraType = { method: "ADD" } | { method: "EDIT", id: string }

export default async function toolsFormAction(extras: ExtraType , prevState: ToolsFormState, formData: FormData) {

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


    const { name, rating } = data;

    const toolData : MenteeTools = {id: Date.now() , name: name, rating: rating };

    const menteeBackground = await getMenteeBackground(mentee.id);
    let toolsArray : MenteeTools[] = [];

    if(menteeBackground){
        const tools = menteeBackground.tools;
        const stringTools = tools?.toString();

        if(stringTools){
            toolsArray = JSON.parse(stringTools);

            if(extras.method == "ADD"){

                toolsArray.push(toolData);

            }else if(extras.method == "EDIT"){

                const updatedtoolsArray :  MenteeTools[] = toolsArray.map((tool) => {

                    if(tool.id == +extras.id){

                        return { id: tool.id, name: toolData.name, rating: toolData.rating };

                    }else{

                        return tool;

                    }
                });

                toolsArray = updatedtoolsArray; 

            }
        }

    }

    if(toolsArray.length < 1){
        toolsArray = [ toolData ];
    }

    await upsertTools(mentee.id, toolsArray); 
    

    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS,content: `${extras.method === "ADD" ? "Added" : "Updated"} Successfully` } };
}