'use client';

import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation'
import Header from "@/ui/components/common/nav/header";
import Footer from "@/ui/components/public/footer";
import ResetPasswordFormWrapper from "@/ui/components/public/forms/reset-password-from-wrapper";
import { useEffect } from "react";

export default function Home() { 
  const searchParams = useSearchParams()
  const token = searchParams.get('token');
  const router = useRouter();

  useEffect(()=>{
    if (!token) {
      router.replace('/auth/login');
    }
  }, [token]);

  return (
   <>
    <Header/>

    <div className="min-h-[500px] py-12">

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto" alt="" src={"/assets/images/logo.svg"} width={36} height={34} />
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Reset password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <ResetPasswordFormWrapper token={token || ""} callbackURL="/auth/login"/>
        </div>
      </div>      

    </div>

    <Footer/>

   </>
  )

}
