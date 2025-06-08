import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const accountId = searchParams.get('account_id');

  if (!accountId) {
    return new Response('Missing account ID', { status: 400 });
  }

  return new Response(
    `
    <h1>Onboarding Complete!</h1>
    <p>Your Stripe account ID: ${accountId}</p>
    <a href="/dashboard/home">Go back dashboard</a>
  `,
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    }
  );
}