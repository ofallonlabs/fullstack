'use client';

import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Header from "@/ui/components/common/nav/header";
import Footer from "@/ui/components/public/footer";

 
export default function Home() { 

  return (
   <>
    <Header/>

    <div className="min-h-[500px] w-11/12 mx-auto py-12">

      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-10 xl:px-12">
          <div className="mx-auto w-full">
            <div>
                <h2 className="mt-4 text-left text-4xl font-bold tracking-tight text-gray-900">
                    Get in touch
                </h2>
                <h3 className="text-gray-600 text-left mt-2 lg:mt-8 text-xl">
                   Whether you have questions, feedback, or need assistance, the O&apos;Mentors team is here to help. Our team will get back to you within 24-48 hours. Together, let’s make your mentorship journey smooth and impactful!
                </h3>
            </div>

            <div className="mt-10">
              
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                            id="first-name"
                            name="first-name"
                            placeholder="First Name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                            id="last-name"
                            name="last-name"
                            placeholder="Last Name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                            />
                        </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">
                                Phone number
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-brand-600">
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                    id="country"
                                    name="country"
                                    autoComplete="country"
                                    aria-label="Country"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                    >
                                    <option>US</option>
                                    <option>CA</option>
                                    </select>
                                    <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="comment" className="block text-sm/6 font-medium text-gray-900">
                                Message
                            </label>
                            <div className="mt-2">
                                <textarea
                                id="comment"
                                name="comment"
                                rows={4}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                defaultValue={''}
                                />
                            </div>
                        </div>

                        <div className="col-span-full flex items-center justify-between">
                            <div className="flex gap-3">
                            <div className="flex h-6 shrink-0 items-center">
                                <div className="group grid size-4 grid-cols-1">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-brand-600 checked:bg-brand-600 indeterminate:border-brand-600 indeterminate:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                    fill="none"
                                    viewBox="0 0 14 14"
                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                    <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                    />
                                    <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                    />
                                </svg>
                                </div>
                            </div>
                            <label htmlFor="remember-me" className="block text-sm/6 text-gray-900 space-x-1">
                                <span>You agree to our friendy</span>          
                                <Link className="text-gray-400 font-semibold hover:underline" href={"/privacy-policy"}>privacy policy</Link> 
                            </label>
                            </div> 
                        </div>

                        <div className="col-span-full">
                            <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-brand-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                            >
                            Send Message
                            </button>
        
                        </div>

                    </div>
                </div>
 
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:flex lg:flex-col lg:justify-center">
          <Image className="ml-auto object-right" alt="" src={"/assets/images/contact/poster.jpg"} width={576} height={876} />
        </div>
      </div>     

    </div>

    <Footer/>

   </>
  )

}
