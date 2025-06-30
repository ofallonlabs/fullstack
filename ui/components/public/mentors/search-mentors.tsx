'use client';

import NewsLetter from "@/ui/components/public/newsletter"; 
import Link from "next/link";
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import type { MentorCardData } from "@/definition/public/data-types";
import MentorProfileCard from "@/ui/components/common/cards/mentor-profile-card";
import { useEffect, useState } from "react";

export default function SearchMentors({mentors} : { mentors: MentorCardData[]}) {
    const [mentorsData, filterMentorsData] = useState<MentorCardData[]>(mentors);
    const [searchValue, updateSearchValue] = useState<string | undefined>();

    useEffect(()=>{

        if(searchValue && searchValue.trim().length > 0){

            filterMentorsData(()=>{
                return mentors.filter((mentor)=>{
                    return mentor.mentorname.includes(searchValue);
                })
            })

        }


    },[mentors, searchValue, filterMentorsData]);
    
    
    return (
   <>
 
        <div className="min-h-[500px]">

            <div className="mx-auto 2xl:w-11/12 lg:px-8 md:px-6 px-2">
            
        
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
                            value={searchValue}
                            onChange={(e)=> updateSearchValue(e.target.value || undefined)}                            
                            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-3 pr-3 pl-14 text-base text-gray-900 outline-1 -outline-offset-1 outline-brand-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:pl-9 sm:text-sm"
                            />

                            <MagnifyingGlassIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-5"
                            />

                      </div>

                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-4 xl:gap-6 2xl:gap-8">

                            {
                                mentorsData.map((mentorItem, idx)=>{
                                    return(
                                        <MentorProfileCard key={`serviceItem-${idx}-card`} mentor={mentorItem}/>                                  
                                    );
                                })
                            }
                      </div>

                </div>
        
                <NewsLetter/>  
            </div>        

        </div>

 
    </>
    );
}
 