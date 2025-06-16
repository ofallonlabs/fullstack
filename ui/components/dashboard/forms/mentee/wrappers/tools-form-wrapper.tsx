import ToolssForm from "@/ui/components/dashboard/forms/mentee/tools-form";
import toolsFormAction, { ExtraType } from "@/actions/dashboard/mentee/tools-form-action";

export default function SkillsFormWrapper(formType: ExtraType){
     return <ToolssForm action={toolsFormAction.bind(null, formType)}/>;
}