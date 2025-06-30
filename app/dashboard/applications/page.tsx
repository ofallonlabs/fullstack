import { auth } from '@/lib/auth/auth';
import MenteeApplications from '@/ui/components/dashboard/sections/applications/mentee-applications';
import MentorApplications from '@/ui/components/dashboard/sections/applications/mentor-applications';
import { headers } from 'next/headers';


export default async function Applications(){

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        return <div>Not authenticated</div>;
    }

    const user = session.user;
    if(!user) return null;


  return (
    <div>
      {user && user.role === "MENTOR" ?  <MentorApplications userId={user.id} /> : <MenteeApplications userId={user.id}/>}
    </div>
  );
 
}