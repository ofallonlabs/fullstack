'use client';
import Link from "next/link";

export default function NewsLetter(){
    return (
        <div className="bg-brand-50/30 py-16 w-full mt-40">
                    <div className="mb-8 text-4xl text-gray-800 font-bold text-center">Subscribe to our newsletter</div> 
                    <div className="mb-8 text-xl text-gray-600 font-normal text-center">Be the first to know about releases and industry news and insights.</div>                 
                    <div className="mt-6 flex max-w-md gap-x-4  mx-auto">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            autoComplete="email"
                            className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-3 text-base text-black outline-1 -outline-offset-1 outline-brand-500 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-brand-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                        >
                            Subscribe
                        </button>
                        </div>
                        <div className="mt-1 text-sm flex max-w-md gap-1 mx-auto text-gray-400">
                            <div>We care about your data in our</div>          
                            <Link className="text-gray-400 font-semibold hover:underline" href={"/privacy-policy"}>Privacy Policy</Link>
                        </div>
        </div> 
    );
}