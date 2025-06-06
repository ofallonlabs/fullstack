import { betterAuth } from "better-auth";
import { APIError }  from "better-auth/api";
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
    databaseHooks:{
        user: {
            create: {
                async after(user) {
                    try {

                        const currentUser = await prisma.user.findUnique({where: {id : user.id}});

                        if(currentUser){

                            if(currentUser.role === "MENTEE"){

                                await prisma.mentee.create({
                                    data: {
                                        userId: currentUser.id     
                                    }
                                });

                            }else if(currentUser.role === "MENTOR"){

                                await prisma.mentor.create({
                                    data: {
                                        userId: currentUser.id     
                                    }
                                });

                            }
                            
                      }

                    }catch(e: unknown){
                        if(e instanceof Error)
                            throw new APIError("BAD_REQUEST", {
                                message: `<Post signup process failed>: ${e.message}`,
                            });
                    }
                },
            }
        }
    },
    advanced:{
        cookiePrefix: "omentors-cookie"
    },
    plugins: [nextCookies()]
});