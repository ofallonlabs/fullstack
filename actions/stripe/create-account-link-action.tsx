"use server";

import { createAccount, createAccountOnboardingLink } from "@/lib/stripe/stripe-services";

export type CreateAccountLinkActionType = 
    {
        error: {
            message: string;
        };
        data: null;
    } | {
        error: null;
        data: {
            onboardingLink: string;
        };
    }

export async function createAccountLinkAction(userName: string, email: string, refreshLink: string, returnLink: string) : Promise<CreateAccountLinkActionType>{

    const account = await createAccount(userName, email);

    if(!account) return { error: { message: `Error<CreateAccountLinkAction>: Failed to create account: ${email}`}, data: null };

    const onboardingLink = await createAccountOnboardingLink(account.id, refreshLink, returnLink);

    if(!onboardingLink) return { error: { message: `Error<CreateAccountLinkAction>: Failed to create onboarding link: ${account.id}`}, data: null };

    return {error: null, data: { onboardingLink:onboardingLink?.url }}

}