"use server";

import { redirect } from "next/navigation";


export async function createAccountLinkAction() : Promise<void>{

    const clientId = process.env.CALENDLY_CLIENT_ID!;
    const redirectUri = process.env.CALENDLY_CALLBACK_URL!;

   redirect(`https://calendly.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`);

}