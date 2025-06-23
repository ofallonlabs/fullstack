import SkillsForm from "@/ui/components/dashboard/forms/mentee/skills-form";
import skillsFormAction, { ExtraType } from "@/actions/dashboard/mentee/skills-form-action";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeSkills } from "@/lib/db/services/mentee-background-service";
import { SkillsFormSchema } from "@/definition/dashboard/mentee/skills-schema";

export default async function SkillsFormWrapper({formType, menteeId}: {formType: ExtraType, menteeId: number}){

    let menteeBackground  = ((await getMenteeBackground(menteeId))?.skills) as Partial<MenteeSkills> | undefined;

    const {success} = SkillsFormSchema.safeParse({
                name: menteeBackground?.name,
                rating: menteeBackground?.rating,
            });

    if(!success){
         menteeBackground = undefined;
    }

     return <SkillsForm action={skillsFormAction.bind(null, formType)} formData={menteeBackground}/>;
}