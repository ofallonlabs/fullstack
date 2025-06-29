import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
export const { signIn, signUp, signOut, useSession } = createAuthClient({
    baseURL: "https://fullstackdev-nine.vercel.app",
    plugins: [inferAdditionalFields({
      user: {
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
  })],
});


// import { createAuthClient } from "better-auth/react"
// export const { signIn, signUp, signOut, useSession } = createAuthClient({
//     baseURL: "https://fullstackdev-xi.vercel.app"
// });