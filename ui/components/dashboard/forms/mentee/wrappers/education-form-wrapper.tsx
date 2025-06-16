import EducationForm from "@/ui/components/dashboard/forms/mentee/education-form";
import educationFormAction from "@/actions/dashboard/mentee/education-form-action";

export default function EducationFormWrapper(){
     return <EducationForm action={educationFormAction}/>;
}