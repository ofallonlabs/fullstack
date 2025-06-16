import SkillsForm from "@/ui/components/dashboard/forms/mentee/skills-form";
import skillsFormAction, { ExtraType } from "@/actions/dashboard/mentee/skills-form-action";

export default function SkillsFormWrapper(formType: ExtraType){
     return <SkillsForm action={skillsFormAction.bind(null, formType)}/>;
}