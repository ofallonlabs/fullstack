import ProfileForm from "@/ui/components/dashboard/forms/mentor/profile-form";
import profileFormAction from "@/actions/dashboard/mentor/profile-form-action";
import { getUserInformation } from "@/lib/db/services/users-service";
import { getMentor } from "@/lib/db/services/mentor-service";
import { ProfileFormDataType, AllowedCountries } from "@/definition/dashboard/mentor/profile-schema";
 
export default async function ProfileFormWrapper({userId} : {userId: string}){
     
     const userInformation = await getUserInformation(userId);
     if(!userInformation) return null; 

     const targetMentor = await getMentor(userInformation.id);
     if(!targetMentor) return null; 
     const country : AllowedCountries = userInformation?.country == "usa" ? AllowedCountries.USA : AllowedCountries.Canada;

     const data : ProfileFormDataType = { 
          country: country ,
          website: userInformation?.externalURL || undefined,
          bio: targetMentor?.aboutMe || undefined,
          currentjob: targetMentor?.currentJobTitle || undefined,
          tagline: targetMentor?.tagline || undefined
     };

     return <ProfileForm action={profileFormAction} data={data}/>;
}