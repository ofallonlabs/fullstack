import PersonalInformationForm from "@/ui/components/dashboard/forms/mentor/personal-information-form";
import personalInformationFormAction from "@/actions/dashboard/mentor/personal-information-form-action";
import { getUserInformation } from "@/lib/db/services/users-service";

export default async function PersonalInformationFormWrapper({userId} : {userId: string}){

     const userInformation = await getUserInformation(userId);

     if(!userInformation) return null;

     return <PersonalInformationForm action={personalInformationFormAction} data={ { firstName: userInformation.firstName, lastName: userInformation.lastName, avatar: userInformation.image || "#" } }/>;
}