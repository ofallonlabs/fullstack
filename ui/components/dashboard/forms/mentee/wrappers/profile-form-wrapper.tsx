import ProfileForm from "@/ui/components/dashboard/forms/mentee/profile-form";
import profileFormAction from "@/actions/dashboard/mentee/profile-form-action";
import { getUserInformation } from "@/lib/db/services/users-service";

export default async function ProfileFormWrapper({userId} : {userId: string}){

     const userInformation = await getUserInformation(userId);

     if(!userInformation) return null;     

     return <ProfileForm action={profileFormAction} data={ { website: userInformation.externalURL || "", country: userInformation.country || "" } }/>;
}