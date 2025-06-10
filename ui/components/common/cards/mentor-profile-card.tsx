import Link from "next/link";
import { StarIcon  } from '@heroicons/react/24/outline';
import { StarIcon as SolidStartIcon } from "@heroicons/react/16/solid";

export default function MentorProfileCard(){
    return (
        <Link href={"/profile/1/2"} className="w-full border border-slate-200 rounded flex flex-row md:flex-col hover:cursor-pointer">
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

                <div className="order-3 md:order-4 px-2 flex flex-row gap-1 text-gray-600 text-sm md:text-lg pt-3 md:pt-0 md:pb-8">
                    <div>3</div>
                    <div>Services from</div>
                    <div><span  className="font-bold text-gray-800">$50</span>/Session</div>
                </div>

            </div>
        </Link>        
    );
}