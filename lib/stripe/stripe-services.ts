import "server-only";

import { stripe } from "@/lib/stripe/Stripe";

async function createAccount(userName: string, email: string) {
  try {
    return await stripe.accounts.create({
      country: 'US',
      email,
      controller: {
        stripe_dashboard: { type: 'express' },
        fees: { payer: 'application' },
        losses: { payments: 'application' },
      },
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });
  } catch (e : unknown) {
    if(e instanceof Error){
        console.error(`Something went wrong creating connected account for user_id: ${userName}:`,e.message);
    }
  }
}

async function getAccount(stripeAccountId: string) {
  try {
    return await stripe.accounts.retrieve(stripeAccountId);
  } catch (e : unknown) {
    if(e instanceof Error){
        console.error(`Something went wrong retrieving connected account information: ${stripeAccountId}`,e.message);
    }
  }
}

async function createAccountOnboardingLink(stripeAccountId: string, refreshLink: string, returnLink: string) {
  try {
    return await stripe.accountLinks.create({
      account: stripeAccountId,
      refresh_url: refreshLink,
      return_url: returnLink,
      type: 'account_onboarding',
    });
  } catch (e : unknown) {
    if(e instanceof Error){
        console.error(`Something went wrong creating onboarding link: ${stripeAccountId}`,e.message);
    }
  }
}

async function createProduct(name: string, stripeAccountId: string) {
  try {
    return await stripe.products.create({ name }, { stripeAccount: stripeAccountId });
  } catch (e : unknown) {
    if(e instanceof Error){
        console.error(`Something went wrong creating product object: ${name} for ${stripeAccountId}`,e.message);
    }
  }
}

async function editProduct(productId: string, newName: string, stripeAccountId: string) {
  try {
    return await stripe.products.update(productId, { name: newName }, { stripeAccount: stripeAccountId });
  } catch (e : unknown) {
    if(e instanceof Error){
        console.error(`Something went wrong updating product with ID: ${productId} for ${stripeAccountId}`,e.message);
    }
  }
}

async function archiveProduct(productId: string, stripeAccountId: string){
  try {
    return await stripe.products.update(productId, { active: false }, { stripeAccount: stripeAccountId });
  } catch (e : unknown) {
    if(e instanceof Error){
        console.error(`Something went wrong archiving product with ID: ${productId} for ${stripeAccountId}`,e.message);
    }
  }
}

async function createPrice(productId: string, floatAmount: number, stripeAccountId: string) {
  const unitAmount = Math.round(floatAmount * 100);
  try {
    return await stripe.prices.create({
      product: productId,
      unit_amount: unitAmount,
      currency: 'usd',
    }, { stripeAccount: stripeAccountId });
  } catch (e : unknown) {
    if(e instanceof Error){
        console.error(`Something went wrong creating product price with ID: ${productId} for ${stripeAccountId}`, e.message);
    }
  }
}

async function archiveStripePrices(productId: string, stripeAccountId: string) {
  try {
    const prices = await stripe.prices.list({ product: productId }, { stripeAccount: stripeAccountId });

    for await (const price of prices.data) {
      await stripe.prices.update(price.id, { active: false }, { stripeAccount: stripeAccountId });
    }
  } catch (e : unknown){
    if(e instanceof Error){
        console.error(`Something went wrong archiving product price with ID: ${productId} for ${stripeAccountId}`, e.message);
    }
  }
}

async function createCheckoutSession(priceAmount: number, priceId: string, stripeAccountId: string, successLink: string, cancelLink: string) {
  const applicationFeeAmount = Math.round(0.2 * priceAmount * 100);

  try {
    return await stripe.checkout.sessions.create(
      {
        mode: 'payment',
        line_items: [{ price: priceId, quantity: 1 }],
        payment_intent_data: {
          application_fee_amount: applicationFeeAmount,
          transfer_data: { destination: stripeAccountId },
        },
        payment_method_types: ['card'],
        success_url: successLink,
        cancel_url: cancelLink,
      },
      { stripeAccount: stripeAccountId }
    );
  } catch (e : unknown){
    if(e instanceof Error){
        console.error(`Something went wrong creating checkout session with ProceId: ${priceId} for ${stripeAccountId}`, e.message);
    }
  }
}

async function getCheckoutSessionWithStripAccount(checkoutSessionId: string, stripeAccountId: string) {
  try {
    return await stripe.checkout.sessions.retrieve(checkoutSessionId, { stripeAccount: stripeAccountId });
  } catch (e : unknown){
    if(e instanceof Error){
        console.error(`Something went wrong retrieve checkout session with ID: ${checkoutSessionId} for ${stripeAccountId}`, e.message);
    }
  }
}

async function getCheckoutSession(checkoutSessionId: string) {
  try {
    return await stripe.checkout.sessions.retrieve(checkoutSessionId, { expand: ['line_items', 'payment_intent'] });
  } catch (e : unknown){
    if(e instanceof Error){
        console.error(`Something went wrong retrieve checkout session with ID: ${checkoutSessionId}`, e.message);
    }
  }
}

async function createStripePaymentLink(priceId: string, stripeAccountId: string ) {
  try {
    return await stripe.paymentLinks.create(
      {
        line_items: [{ price: priceId, quantity: 1 }],
      },
      { stripeAccount: stripeAccountId }
    );
  } catch (e : unknown){
    if(e instanceof Error){
        console.error(`Something went wrong creating payment link for PriceId: ${priceId} for ${stripeAccountId}`, e.message);
    }
  }
}

export {
    
    createAccount,
    getAccount,
    createAccountOnboardingLink,
    createProduct,
    editProduct,
    archiveProduct,
    createPrice,
    archiveStripePrices,
    createCheckoutSession,
    getCheckoutSession,
    getCheckoutSessionWithStripAccount,
    createStripePaymentLink

}