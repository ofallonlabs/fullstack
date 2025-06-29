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
  let isCalendlyConnected : boolean = false;
  let isStripeConnected : boolean = false;

  if(user.role == "MENTOR"){
    const targetMentor = await getMentor(user.id);
    targetId = targetMentor?.id;
    isCalendlyConnected = targetMentor?.verifiedCalendly || false;
    isStripeConnected = targetMentor?.verifiedStrip || false;

  }else if(user.role == "MENTEE"){
    targetId = (await getMentee(user.id))?.id;
  }

  if(!targetId) return null;
 

  return (
    <div>
      {user && user.role === "MENTOR" ?  <MentorSettings mentorId={targetId} userId={user.id} isCalendlyConnected={isCalendlyConnected} isStripeConnected={isStripeConnected} /> : <MenteeSettings menteeId={targetId} userId={user.id} />}
    </div>
  );
}