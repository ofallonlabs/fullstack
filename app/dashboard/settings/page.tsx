import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import MentorSettings from "@/ui/components/dashboard/sections/settings/mentor-settings";
import MenteeSettings from "@/ui/components/dashboard/sections/settings/mentee-settings";
import { getMentee } from "@/lib/db/services/mentee-service";
import { getMentor } from "@/lib/db/services/mentor-service";

export default async function Settings() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  const user = session.user;
  if(!user) return null;

  let targetId : number | undefined = undefined;

  if(user.role == "MENTOR"){
    targetId = (await getMentor(user.id))?.id;
  }else if(user.role == "MENTEE"){
    targetId = (await getMentee(user.id))?.id;
  }

  if(!targetId) return null;
 

  return (
    <div>
      {user && user.role === "MENTOR" ?  <MentorSettings mentorId={targetId} userId={user.id} /> : <MenteeSettings menteeId={targetId} userId={user.id} />}
    </div>
  );
}