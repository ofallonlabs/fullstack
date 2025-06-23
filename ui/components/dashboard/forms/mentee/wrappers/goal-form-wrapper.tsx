import GoalForm from "@/ui/components/dashboard/forms/mentee/goal-form";
import goalFormAction, { ExtraType } from "@/actions/dashboard/mentee/goal-form-action";
import { GoalDataType } from "@/definition/dashboard/mentee/goal-schema";
import { getMenteeGoal } from "@/lib/db/services/mentee-goal-service";
export default async function GoalFormWrapper({formType, menteeId}:{formType: ExtraType, menteeId: number}){
     let formData : GoalDataType | undefined = undefined;

     if(formType.method == "EDIT"){
            const menteeGoal = await getMenteeGoal(menteeId, +formType.id);
            if(menteeGoal){

               formData = {
                    title: menteeGoal.title,
                    description: menteeGoal.description || "",
                    exr: menteeGoal.expectations || "",
                    ext: menteeGoal.expectedTimeline || "",
                    exmwmpm: menteeGoal.meetingFrequency,
                    mattwot: menteeGoal.focusHpw
               }

            }

     }

     return <GoalForm action={goalFormAction.bind(null, formType)} goalData={formData}/>;
}