"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

type GetUserActionType = {
    fullname: string;
    email: string;
    avatar: string | null;
} | null

export async function getUserAction() : Promise<GetUserActionType> {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return null;
    }else{
        return {email: session.user.email ,fullname: session.user.name, avatar: session.user.image || null}
    }      

}