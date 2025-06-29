import { NextRequest } from 'next/server';
import { getAccount } from '@/lib/stripe/stripe-services';
import { updateMentorStripeDetails } from '@/lib/db/services/mentor-service';
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { printError } from '@/utils/Utils';
import { revalidatePath } from 'next/cache';
import { redirect, RedirectType } from 'next/navigation';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get('account_id');
  let redirectTo : string | undefined = undefined;
  const revalidateURL = "/"; 

  if (!accountId) {
    return new Response('Missing account ID', { status: 400 });
  }


  try {

      const account = await getAccount(accountId);

      if (!account) {
        return new Response('No Account found', { status: 400 });
      }

      if (account.details_submitted) {

        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session || session.user.role != "MENTOR") {
            return new Response('No Mentor Account found', { status: 400 });
        }   

        await updateMentorStripeDetails(session.user.id, { stripeAccountId: account.id, verifiedStrip: true});
      }  

      redirectTo = "/dashboard/settings";

  }catch (error) {

      printError('Error handling refresh:', error);

      return new Response('Something went wrong. Please try again.', {
        status: 500,
      });

  }finally{

    if(redirectTo != undefined){
      revalidatePath(revalidateURL);
      redirect(redirectTo, RedirectType.replace);
    }
    
  }


  // return new Response(
  //   `
  //   <h1>Onboarding Complete!</h1>
  //   <p>Your Stripe account ID: ${accountId}</p>
  //   <a href="/dashboard/home">Go back dashboard</a>
  // `,
  //   {
  //     status: 200,
  //     headers: { 'Content-Type': 'text/html' },
  //   }
  // );

}