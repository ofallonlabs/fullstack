'use client';

import { signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";



export default function SignoutButton({children} : {children: React.ReactNode}){
    const router = useRouter();

    const signoutCB = () => {
        signOut({
            fetchOptions: {
                onSuccess: () => {router.replace("/");}
            }
        });
    }

    
    return (
        <div className="cursor-pointer hover:bg-gray-100" onClick={signoutCB}>
            {children}
        </div>
    );

}