import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import MentorSettings from "@/ui/components/dashboard/sections/settings/mentor-settings";
import MenteeSettings from "@/ui/components/dashboard/sections/settings/mentee-settings";


export default async function Settings() {
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
      {user && user.role === "MENTOR" ?  <MentorSettings /> : <MenteeSettings />}
    </div>
  );
}