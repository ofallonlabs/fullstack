"use server";
import { redirect } from "next/navigation";
import { ToggleConnectType, ConnectType } from "@/definition/dashboard/common/common-types";

export async function toggleConnectAction(connectType: ToggleConnectType): Promise<void>{

    if(connectType.type == ConnectType.CALENDLY){

        const clientId = process.env.CALENDLY_CLIENT_ID!;
        const redirectUri = process.env.CALENDLY_CALLBACK_URL!;

        redirect(`https://calendly.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`);
    }

}