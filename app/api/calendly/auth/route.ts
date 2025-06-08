import {auth} from "@/lib/auth/auth";
import { NextRequest } from 'next/server';
import { getAccessTokenFromCode, getUserData } from '@/lib/calendly/Calendly';

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

    const userInfo = await getUserData(tokens.access_token);

    return new Response(
      JSON.stringify({
        success: true,
        tokens,
        user: userInfo,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error during Calendly auth:', error);
    return new Response('Authentication failed', { status: 500 });
  }
}