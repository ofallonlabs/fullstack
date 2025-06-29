"use server";
import { redirect } from "next/navigation";
import { ToggleConnectType, ConnectType } from "@/definition/dashboard/common/common-types";
import { createAccount, createAccountOnboardingLink } from "@/lib/stripe/stripe-services";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { printError } from "@/utils/Utils";

export async function toggleConnectAction(connectType: ToggleConnectType): Promise<void>{

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role != "MENTOR") {
        printError("ConnectAction", new Error("You are not allowed to perfomed this action"));
        return;
    }   

    if(connectType.type == ConnectType.CALENDLY){

        const clientId = process.env.CALENDLY_CLIENT_ID!;
        const redirectUri = process.env.CALENDLY_CALLBACK_URL!;

        redirect(`https://calendly.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`);

    }else if(connectType.type == ConnectType.STRIPE){

        const account = await createAccount(session.user.name, session.user.email);

        if(!account){
            printError("ConnectAction", new Error(`Failed to create account: ${session.user.email}`));
            return;
        }

        const returnURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/return?account_id=${account.id}`;
        const refreshURL = `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/refresh?account_id=${account.id}`;

        const onboardingLink = await createAccountOnboardingLink(account.id, refreshURL, returnURL);

        if(!onboardingLink){
            printError("ConnectAction", new Error(`Failed to create onboarding link: ${account.id}`));
            return;            
        }

        if(onboardingLink?.url){
            redirect(`${onboardingLink?.url}`);  
        }else{
            printError("ConnectAction", new Error(`Failed to fetch onboarding link url: ${account.id}`));
            return;             
        }       

    }

}