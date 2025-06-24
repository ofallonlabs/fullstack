import ToolssForm from "@/ui/components/dashboard/forms/mentee/tools-form";
import toolsFormAction, { ExtraType } from "@/actions/dashboard/mentee/tools-form-action";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeTools } from "@/lib/db/services/mentee-background-service";
import { ToolsFormSchema } from "@/definition/dashboard/mentee/tools-schema";


export default async function ToolsFormWrapper({formType, menteeId}: {formType: ExtraType, menteeId: number}){

    let targetTool: Partial<MenteeTools> | undefined = undefined;

    if(formType.method == "EDIT"){
          let menteeBackground  = ((await getMenteeBackground(menteeId))?.tools) as Partial<MenteeTools[]> | undefined;

          const selectedTool = menteeBackground?.find((tool) => tool?.id == +formType.id)

          const {success} = ToolsFormSchema.safeParse({
                         name: selectedTool?.name,
                         rating: selectedTool?.rating,
                    });

          if(!success){
               menteeBackground = undefined;
          }else{
               targetTool = selectedTool;
          }
    }


     return <ToolssForm action={toolsFormAction.bind(null, formType)} formData={targetTool}/>;
}