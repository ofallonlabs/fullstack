import ProfileForm from "@/ui/components/dashboard/forms/mentor/profile-form";
import profileFormAction from "@/actions/dashboard/mentor/profile-form-action";

export default function ProfileFormWrapper(){
     return <ProfileForm action={profileFormAction}/>;
}