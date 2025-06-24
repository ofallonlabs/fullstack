import SkillsForm from "@/ui/components/dashboard/forms/mentee/skills-form";
import skillsFormAction, { ExtraType } from "@/actions/dashboard/mentee/skills-form-action";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeSkills } from "@/lib/db/services/mentee-background-service";
import { SkillsFormSchema } from "@/definition/dashboard/mentee/skills-schema";

export default async function SkillsFormWrapper({formType, menteeId}: {formType: ExtraType, menteeId: number}){

    let targetSkill : Partial<MenteeSkills> | undefined = undefined;

    if(formType.method == "EDIT"){
          let menteeBackground  = ((await getMenteeBackground(menteeId))?.skills) as Partial<MenteeSkills[]> | undefined;

          const selectedSkill = menteeBackground?.find((skill) => skill?.id == +formType.id)

          const {success} = SkillsFormSchema.safeParse({
                         name: selectedSkill?.name,
                         rating: selectedSkill?.rating,
                    });

          if(!success){
               menteeBackground = undefined;
          }else{
               targetSkill = selectedSkill;
          }
    }

     return <SkillsForm action={skillsFormAction.bind(null, formType)} formData={targetSkill}/>;
}