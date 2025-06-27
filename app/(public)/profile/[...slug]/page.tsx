import ProfileWrapper from "@/ui/components/public/profile/mentor/wrappers/profile-wrapper";

type PageProps = {
  params: Promise<{slug: string[]}>
}

export default async function ProfilePage({params}:PageProps){

    const parameters = await params;

    if(parameters.slug.length < 1) return null;

    const mentorId = parameters.slug?.[0];
    if(!mentorId || !Number(mentorId)) return null;


  return <ProfileWrapper mentorId={+mentorId}/>;
}