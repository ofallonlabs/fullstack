import GoalForm from "@/ui/components/dashboard/forms/mentee/goal-form";
import goalFormAction, { ExtraType } from "@/actions/dashboard/mentee/goal-form-action";

export default function GoalFormWrapper(formType: ExtraType){
     return <GoalForm action={goalFormAction.bind(null, formType)}/>;
}