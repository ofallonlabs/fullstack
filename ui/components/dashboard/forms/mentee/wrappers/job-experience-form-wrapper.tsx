import JobExperienceForm from "@/ui/components/dashboard/forms/mentee/job-experience-form";
import jobExperienceFormAction from "@/actions/dashboard/mentee/job-experience-form-action";

export default function JobExperienceFormWrapper(){
     return <JobExperienceForm action={jobExperienceFormAction}/>;
}