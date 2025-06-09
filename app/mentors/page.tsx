'use client';

import Header from "@/ui/components/common/nav/header";
import Footer from "@/ui/components/public/footer";
import NewsLetter from "@/ui/components/public/newsletter"; 
import Link from "next/link";
import { ArrowLongRightIcon, StarIcon  } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon, StarIcon as SolidStartIcon } from "@heroicons/react/16/solid";

export default function Home() {
    return (
   <>
        <Header/>

        <div className="min-h-[500px]">

            <div className="mx-auto 2xl:w-11/12 lg:px-8 px-6 ">
            
        
                <div className="w-full lg:w-7/12 text-center mx-auto pt-16 pb-8 lg:py-16 gap-6">

                    <div className="text-center flex flex-col gap-4">
                        <div className="text-brand-600 text-md">All Mentors</div>
                        <div className="text-gray-800 font-bold text-4xl lg:text-5xl">Find a mentor</div>
                        <div className="text-base lg:text-xl text-gray-600">
                            Looking for a mentor? Explore all the available mentors below.
                        </div>
                        <div className="flex-none w-full px-8">
                            <div className="flex flex-row w-full justify-center items-center gap-2 text-md text-slate-500 font-light">
                                <Link href={"/services"} className="transition-all duration-200 order-1 md:order-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold  px-10 py-2 lg:py-3 rounded-md text-center w-full lg:w-fit flex flex-row gap-1 items-center justify-center">
                                    Explore all services
                                    <ArrowLongRightIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                                </Link>
                            </div>
                        </div>                
                    </div>
                </div>

                <div className="w-full md:w-11/12 xl:w-10/12 text-center mx-auto">

                      <div className="mt-2 grid grid-cols-1">

                            <input 
                            name="mentorssearch"
                            type="search"
                            placeholder="Saerch Mentros..."
                            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-3 pr-3 pl-14 text-base text-gray-900 outline-1 -outline-offset-1 outline-brand-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:pl-9 sm:text-sm"
                            />

                            <MagnifyingGlassIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-5"
                            />

                      </div>

                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-4 xl:gap-6 2xl:gap-8">

                            {
                                [1,2,3,4,5,6].map((serviceItem, idx)=>{
                                    return(                                  
                                        <div key={`serviceItem-${idx}-card`} className="w-full border border-slate-200 rounded flex flex-row md:flex-col">
                                            <div className="relative flex-none w-4/12 aspect-square md:flex-1 md:w-full md:aspect-[10/6]">
                                                <div className="absolute inset-0 bg-gray-50"></div>
                                                <div className="absolute top-2 left-2 md:top-4 md:left-4 w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-brand-100/60"></div>
                                                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-[20px] h-[20px] rounded bg-brand-100/60"></div>
                                                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-[30px] h-[30px] md:w-[30px] md:h-[30px] rounded-full bg-brand-100/60"></div>
                                            </div>
                                            <div className="flex-1 flex flex-col py-2 md:py-0">                                                                  
                                                <div className="order-2 md:order-1 flex flex-row justify-start items-center gap-2 py-1 md:py-4 px-2">
                                                    <div className="text-brand-400 flex flex-row">
                                                        {
                                                            [1,2,3,4,5].map((item, idx)=>{
                                                                if(idx <= 3)
                                                                    return <SolidStartIcon key={`solidstar-${idx}`} className="size-3 md:size-4"/>
                                                                else 
                                                                    return <StarIcon key={`outlinestar-${idx}`}  className="size-3 md:size-4"/>    
                                                            })
                                                        }
                                                    </div>
                                                    <div className="flex flex-row gap-1 text-xs md:text-sm text-gray-600 font-normal">
                                                        <div>4/5</div>
                                                        <div>{"(10 reviews)"}</div>
                                                    </div>
                                                </div>

                                                <div className="order-1 md:order-2 px-2 flex flex-col items-start justify-start">
                                                    <div className="font-semibold text-gray-800 text-base md:text-lg">The name of the mentor</div>
                                                    <div className="font-normal text-gray-600 text-sm md:text-base">The title of the mentor goes here</div>
                                                </div>

                                                <div className="order-4 md:order-3 px-2 pt-4 md:py-6 flex flex-row justify-end sm:justify-start items-center gap-2">
                                                    <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>
                                                    <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>  
                                                    <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>                                                                  
                                                </div>

                                                <div className="order-3 md:order-4 px-2 flex flex-row gap-1 text-gray-600 text-sm md:text-lg pt-3 md:pt-0 md:pb-3">
                                                    <div>3</div>
                                                    <div>Services from</div>
                                                    <div><span  className="font-bold text-gray-800">$50</span>/Session</div>
                                                </div>

                                                <div className="order-5 md:order-5 py-4 px-2 hidden md:block">
                                                    <div className="flex flex-row w-full justify-center items-center gap-2 text-md text-slate-500 font-light">
                                                        <Link href={"/profile/#/#"} className="transition-all duration-200 bg-brand-500 hover:bg-brand-600 text-white font-semibold  px-10 py-2 rounded-md text-center w-full text-center">
                                                            Visit Profile
                                                        </Link>
                                                    </div>                                   
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                      </div>

                </div>
        
                <NewsLetter/>  
            </div>        

        </div>

        <Footer/>

    </>
    );
}
 