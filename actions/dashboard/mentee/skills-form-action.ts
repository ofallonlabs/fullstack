"use server";

import { MenteeSkills, upsertSkills, getMenteeBackground } from "@/lib/db/services/mentee-background-service"; 
import { getMentee } from "@/lib/db/services/mentee-service";
import { ErrorMessageType, SkillsFormState, SkillsFormSchema } from "@/definition/dashboard/mentee/skills-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";


export type ExtraType = { method: "ADD" } | { method: "EDIT", id: string }

export default async function skillsFormAction(extras: ExtraType , prevState: SkillsFormState, formData: FormData) {
    
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
    
    const {success, error, data} = SkillsFormSchema.safeParse({
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

    const skillData : MenteeSkills = {id: Date.now() , name: name, rating: rating };

    const menteeBackground = await getMenteeBackground(mentee.id);
    let skillsArray : MenteeSkills[] = [];

    if(menteeBackground){
        const skills = menteeBackground.skills;
        const stringSkills = skills?.toString();

        if(stringSkills){
            skillsArray = JSON.parse(stringSkills);

            if(extras.method == "ADD"){

                skillsArray.push(skillData);

            }else if(extras.method == "EDIT"){

                const updatedSkillsArray :  MenteeSkills[] = skillsArray.map((skill) => {

                    if(skill.id == +extras.id){

                        return { id: skill.id, name: skillData.name, rating: skillData.rating };

                    }else{

                        return skill;

                    }
                });

                skillsArray = updatedSkillsArray; 

            }
        }

    }

    if(skillsArray.length < 1){
        skillsArray = [ skillData ];
    }

    await upsertSkills(mentee.id, skillsArray); 

    revalidatePath(`/dashboard`);
    return { message: {type: ErrorMessageType.SUCCESS,content: `${extras.method === "ADD" ? "Added" : "Updated"} Successfully` } };
}





