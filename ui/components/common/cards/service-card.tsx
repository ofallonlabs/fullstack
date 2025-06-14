import Link from "next/link";
import {  StarIcon  } from '@heroicons/react/24/outline';
import {  StarIcon as SolidStartIcon } from "@heroicons/react/16/solid";

export default function ServiceCard(){
    return (
        <Link href={"/profile/1/2"} className="w-full border border-slate-200 rounded flex flex-row md:flex-col hover:cursor-pointer">
               <div className="relative flex-none w-4/12 aspect-square md:flex-1 md:w-full md:aspect-[10/6]">
                   <div className="absolute inset-0 bg-gray-50"></div>
                   <div className="absolute top-2 left-2 md:top-4 md:left-4 w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full bg-brand-100/60"></div>
                   <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-[20px] h-[20px] rounded bg-brand-100/60"></div> 
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
           <div className="font-semibold text-gray-800 text-base md:text-lg">The name of the service</div>
           <div className="font-normal text-gray-600 text-sm md:text-base space-x-2">
               <span>by</span>
               <span className="text-brand-500">The name of the mentor</span>
           </div>
           <div className="text-gray-700 md:text-sm lg:text-base text-left mt-6 hidden md:block">
               <p className="overflow-hidden text-ellipsis md:text-clip h-[100px] line-clamp-3">
                   Coaching sessions to plan and execute on your career goals
               </p>
               
           </div>
                   </div>

                   <div className="order-4 md:order-3 px-2 pt-4 md:py-6 flex flex-row justify-end sm:justify-start items-center gap-2">
           <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>
           <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded bg-brand-100/80"></div>                         
                   </div>

                   <div className="order-3 md:order-4 px-2 flex flex-row justify-between items-center gap-1 text-gray-600 text-base lg:text-lg pt-3 md:pt-0 md:pb-8">
           <div><span className="font-bold text-gray-800">$50</span>/Session</div>
           <div className="bg-brand-300 text-brand-700 text-center px-4 py-1 rounded text-xs lg:text-sm hidden md:inline-block">
               Preview Availability
           </div>
                   </div>

               </div>
           </Link>
    );
}