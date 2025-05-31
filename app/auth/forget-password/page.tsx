'use client';

import Image from "next/image";

import Header from "@/ui/components/header";
import Footer from "@/ui/components/footer";
import SigninFormWrapper from "@/ui/components/forms/signin-form-wrapper";
import Link from "next/link";

export default function Home() { 

  return (
   <>
    <Header/>

    <div className="min-h-[500px] py-12">

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto" alt="" src={"/assets/images/logo.svg"} width={36} height={34} />
          <h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Forgot your password
          </h2>
          <h3 className="text-gray-600 text-center mt-2">
            Enter your email to reset your password
          </h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SigninFormWrapper/>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don’t have an account? {' '}
            <Link href="/auth/register" className="cursor-pointer font-semibold text-brand-600 hover:text-brand-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>      

    </div>

    <Footer/>

   </>
  )

}
