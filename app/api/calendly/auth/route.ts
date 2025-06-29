import {auth} from "@/lib/auth/auth";
import { NextRequest } from 'next/server';
import { getAccessTokenFromCode } from '@/lib/calendly/Calendly';
import { updateMentorCalendlyCred } from "@/lib/db/services/mentor-service";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export async function GET(request: NextRequest) {
  const session = await auth.api.getSession(request);

  if (!session || !session.user) {
    return new Response("Forbidden", { status: 403 });
  }
 
  const { searchParams } = request.nextUrl;
  const code = searchParams.get('code');

  if (!code) {
    return new Response('Authorization code missing', { status: 400 });
  }

  try {
  
    const tokens = await getAccessTokenFromCode(code);
    // const userInfo = await getUserData(tokens.access_token);

    await updateMentorCalendlyCred(session.user.id, code, tokens);



    // return new Response(
    //   JSON.stringify({
    //     success: true,
    //     tokens,
    //     user: userInfo,
    //   }),
    //   {
    //     status: 200,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );

  } catch (error) {
    console.error('Error during Calendly auth:', error);
    return new Response('Authentication failed', { status: 500 });
  }finally{
    revalidatePath("/dashboard");
    redirect("/dashboard/settings", RedirectType.replace);
  }
}