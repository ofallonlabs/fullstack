'use client';

import Image from "next/image";
import Link from "next/link";

import Header from "@/ui/components/header";
import Footer from "@/ui/components/footer";
import RegisterFormWrapper from "@/ui/components/forms/register-form-wrapper";
 

export default function Home() { 

  return (
   <>
    <Header/>

    <div className="min-h-[500px] w-10/12 mx-auto py-12">

      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
                <h2 className="mt-4 text-left text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign up
                </h2>
                <h3 className="text-gray-600 text-left mt-2">
                    Start your journey today
                </h3>
            </div>

            <div className="mt-10">
              <div>
                
                <RegisterFormWrapper />

                <div className="text-sm text-center text-gray-600 space-x-1 mt-8">
                    <span>Already a user? </span>
                    <Link className="text-brand-500 font-semibold hover:underline" href={"/auth/login"}>Log in</Link>
                </div>
              </div>
 
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:flex lg:flex-col lg:justify-center">
          <div className="text-center text-gray-800 text-2xl tracking-wide">1:1 mentorship is a journey...</div>
          <Image className="mx-auto" alt="" src={"/assets/images/register/register_bg.png"} width={1141} height={784} />
        </div>
      </div>     

    </div>

    <Footer/>

   </>
  )

}
