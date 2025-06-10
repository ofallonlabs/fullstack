export default async function StripeCheckoutCancelPage({ searchParams } : {searchParams: Promise<{canceled: boolean}>}) {
  const { canceled } = await searchParams

  if (canceled) {
    console.log(
      'Order canceled'
    )
  }
  return (
    <div>Order canceled</div>
  )
}