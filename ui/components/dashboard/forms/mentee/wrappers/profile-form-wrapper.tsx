import ProfileForm from "@/ui/components/dashboard/forms/mentee/profile-form";
import profileFormAction from "@/actions/dashboard/mentee/profile-form-action";

export default function ProfileFormWrapper(){
     return <ProfileForm action={profileFormAction}/>;
}