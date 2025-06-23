import ToolssForm from "@/ui/components/dashboard/forms/mentee/tools-form";
import toolsFormAction, { ExtraType } from "@/actions/dashboard/mentee/tools-form-action";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeTools } from "@/lib/db/services/mentee-background-service";
import { ToolsFormSchema } from "@/definition/dashboard/mentee/tools-schema";


export default async function ToolsFormWrapper({formType, menteeId}: {formType: ExtraType, menteeId: number}){

    let menteeBackground  = ((await getMenteeBackground(menteeId))?.tools) as Partial<MenteeTools> | undefined;

    const {success} = ToolsFormSchema.safeParse({
                name: menteeBackground?.name,
                rating: menteeBackground?.rating,
            });

    if(!success){
         menteeBackground = undefined;
    }

     return <ToolssForm action={toolsFormAction.bind(null, formType)} formData={menteeBackground}/>;
}