import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import  prisma from "@/lib/db/prisma";
 
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {  
        enabled: true
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    user:{
        additionalFields:{
            role: {
                type: "string",
                required: true,
                input: true
            },
            firstName: {
                fieldName:"firstName",
                type: "string",
                required: true,
                input: true
            },
            lastName: {
                fieldName:"lastName",
                type: "string",
                required: true,
                input: true
            },
        }
    }
});