import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import  prisma from "@/lib/db/prisma";
import { sendEmail } from "../mailing/gmail";
 
export const auth = betterAuth({
    appName: "Omentors Fullstack",
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {  
        enabled: true,
        minPasswordLength:8,
        maxPasswordLength:20,
        sendResetPassword: async ({user, url}) => {           
            await sendEmail({
                to: user.email,
                subject:"Reset your password",
                text: `reset password link: ${url}`
            })
        },
        resetPasswordTokenExpiresIn: 3600,
        requireEmailVerification: true
    },
    emailVerification: {
            sendOnSignUp: true,
            sendVerificationEmail: async ({ user, url }) => {
                await sendEmail({
                    to: user.email,
                    subject: 'Verify your email address',
                    text: `Click the link to verify your email: ${url}`
                })
            }
    },
    account:{
        accountLinking:{
            enabled:true
        }
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
    },
    advanced:{
        cookiePrefix: "omentors-cookie"
    },
    plugins: [nextCookies()]
});