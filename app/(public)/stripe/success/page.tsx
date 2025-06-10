import { redirect } from 'next/navigation'
import { getCheckoutSession } from '@/lib/stripe/stripe-services';

export default async function StripeCheckoutSuccessPage({ searchParams }: {searchParams: Promise<{ session_id : string }>}) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error('Please provide a valid session_id')

  const retreivedSession = await getCheckoutSession(session_id);

  if(!retreivedSession){
    throw new Error('No session found');
  }

  const {status, customer_details} = retreivedSession;

  if (status && status === 'open') {
    return redirect('/')
  }

  if (status && status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customer_details?.email || ''}
        </p>
      </section>
    )
  }
}