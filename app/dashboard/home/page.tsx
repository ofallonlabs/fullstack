import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import MentorHome from "@/ui/components/dashboard/sections/home/mentor-home";
import MenteeHome from "@/ui/components/dashboard/sections/home/mentee-home";


export default async function Home() {
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
      {user && user.role === "MENTOR" ?  <MentorHome userFirstName={user.firstName} userId={user.id} /> : <MenteeHome userFirstName={user.firstName} userId={user.id}/>}
    </div>
  );
}