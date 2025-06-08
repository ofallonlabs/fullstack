import { NextRequest } from 'next/server';
import { getAccount, createAccountOnboardingLink } from '@/lib/stripe/stripe-services';
 
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get('account_id');

  if (!accountId) {
    return new Response('Missing account ID', { status: 400 });
  }

  try {
    
        const account = await getAccount(accountId);

        if (!account) {
            return new Response('No Account found', { status: 400 });
        }

        if (account.details_submitted) {
    
        const returnURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/return?account_id=${accountId}`;
        return new Response(null, {
            status: 302,
            headers: {
            Location: returnURL,
            },
        });
        }

        const accountLink = await createAccountOnboardingLink(accountId, `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/refresh`, `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/return`);

        if (!accountLink) {
            return new Response('No Account link found', { status: 400 });
        }

        return new Response(null, {
            status: 302,
            headers: {
                Location: accountLink.url,
            },
        });

    } catch (error) {
        console.error('Error handling refresh:', error);
        return new Response('Something went wrong. Please try again.', {
        status: 500,
        });
    }
}