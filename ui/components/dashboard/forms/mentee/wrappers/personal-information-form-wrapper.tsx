import PersonalInformationForm from "@/ui/components/dashboard/forms/mentee/personal-information-form";
import personalInformationFormAction from "@/actions/dashboard/mentee/personal-information-form-action";

export default function PersonalInformationFormWrapper(){
     return <PersonalInformationForm action={personalInformationFormAction}/>;
}