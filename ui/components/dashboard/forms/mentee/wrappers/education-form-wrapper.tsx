import EducationForm from "@/ui/components/dashboard/forms/mentee/education-form";
import educationFormAction from "@/actions/dashboard/mentee/education-form-action";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeEducationType } from "@/lib/db/services/mentee-background-service";
import { MenteeEducationFormSchema } from "@/definition/dashboard/mentee/education-schema";

export default async function EducationFormWrapper({menteeId}: {menteeId: number}){

     let menteeBackground  = ((await getMenteeBackground(menteeId))?.education) as Partial<MenteeEducationType> | undefined;

     const {success} = MenteeEducationFormSchema.safeParse({
             hdl: menteeBackground?.highestEducationalLevel,
             fos: menteeBackground?.fieldOfStudy,
             gradyear: menteeBackground?.graduationYear,
             gradinstitute: menteeBackground?.graduationInstitute,
          });

     if(!success){
          menteeBackground = undefined;
     }

     return <EducationForm action={educationFormAction} formData={menteeBackground}/>;
}