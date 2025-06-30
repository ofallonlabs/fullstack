"use client";

import Image from "next/image";
import Link from "next/link";
import { StarIcon  } from '@heroicons/react/24/outline';
import { StarIcon as SolidStartIcon } from "@heroicons/react/16/solid";
import type { MentorCardData } from "@/definition/public/data-types";


export default function MentorProfileCard({mentor}: {mentor: MentorCardData}){
    return (
        <Link href={mentor.link} className="w-full border border-slate-200 rounded flex flex-row md:flex-col hover:cursor-pointer">
            <div className="relative flex-none w-4/12 aspect-square md:flex-1 md:w-full md:aspect-[10/6]">
                <Image alt="" src={mentor.avatar || "#"} className="absolute inset-0 bg-gray-50"/>
                <Image alt="" src={"/assets/images/countries/united-states.svg"} width={512} height={512} className="absolute object-cover top-2 left-2 md:top-4 md:left-4 w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-brand-100/60" />                
                <Image alt="" src={"/assets/images/countries/united-kingdom.svg"} width={512} height={512} className="absolute bottom-2 right-2 object-cover md:bottom-4 md:right-4 w-[30px] h-[30px] md:w-[30px] md:h-[30px] rounded-full bg-brand-100/60" />                
                <div className="absolute object-cover bottom-2 left-2 md:bottom-4 md:left-4 w-[20px] h-[20px] rounded bg-brand-100/60"></div>
            </div>
            <div className="flex-1 flex flex-col py-2 md:py-0">                                  
                <div className="order-2 md:order-1 flex flex-row justify-start items-center gap-2 py-1 md:py-4 px-2">
                    <div className="text-brand-400 flex flex-row">
                        {
                            [1,2,3,4,5].map((item, idx)=>{
                                if(idx <= 3)
                                    if(idx <= (mentor.avgratings > 5 ? 4 : ((mentor.avgratings - 1) < 0 ? 0 : (mentor.avgratings - 1))))
                                        return <SolidStartIcon key={`solidstar-${idx}-${item}`} className="size-3 md:size-4"/>
                                    else 
                                        return <StarIcon key={`outlinestar-${idx}-${item}`}  className="size-3 md:size-4"/>     
                            })
                        }
                    </div>
                    <div className="flex flex-row gap-1 text-xs md:text-sm text-gray-600 font-normal">
                            <div>{`${mentor.avgratings}/5`}</div>
                            <div>{`(${mentor.reviews} reviews)`}</div>
                    </div>
                </div>

                <div className="order-1 md:order-2 px-2 flex flex-col items-start justify-start">
                    <div className="font-semibold text-gray-800 text-base md:text-lg">{mentor.mentorname}</div>
                    <div className="font-normal text-gray-600 text-sm md:text-base">{mentor.mentortagline}</div>
                </div>

                <div className="order-4 md:order-3 px-2 pt-4 md:py-6 flex flex-row justify-end sm:justify-start items-center gap-2">
                    <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>
                    <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>  
                    <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>                                  
                </div>

                <div className="order-3 md:order-4 px-2 flex flex-row gap-1 text-gray-600 text-sm md:text-lg pt-3 md:pt-0 md:pb-8">
                    <div>{mentor.servicescount}</div>
                    <div>Services from</div>
                    <div><span  className="font-bold text-gray-800">${mentor.serviceminprice}</span>/Session</div>
                </div>

            </div>
        </Link>        
    );
}