import JobExperienceForm from "@/ui/components/dashboard/forms/mentee/job-experience-form";
import jobExperienceFormAction from "@/actions/dashboard/mentee/job-experience-form-action";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeJobExperience } from "@/lib/db/services/mentee-background-service";
import { JobExperienceFormSchema } from "@/definition/dashboard/mentee/job-experience-schema";

export default async function JobExperienceFormWrapper({menteeId}: {menteeId: number}){

     let menteeBackground  = ((await getMenteeBackground(menteeId))?.job) as Partial<MenteeJobExperience> | undefined;

     const {success} = JobExperienceFormSchema.safeParse({
               status: menteeBackground?.employementStatus || false,
               title: menteeBackground?.title,
               employer:  menteeBackground?.title          
          });

     if(!success){
          menteeBackground = undefined;
     }

     return <JobExperienceForm action={jobExperienceFormAction} formData={menteeBackground}/>;
}