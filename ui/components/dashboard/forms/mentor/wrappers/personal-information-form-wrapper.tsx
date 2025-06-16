import PersonalInformationForm from "@/ui/components/dashboard/forms/mentor/personal-information-form";
import personalInformationFormAction from "@/actions/dashboard/mentor/personal-information-form-action";

export default function PersonalInformationFormWrapper(){
     return <PersonalInformationForm action={personalInformationFormAction}/>;
}