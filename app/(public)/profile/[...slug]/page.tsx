import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import ServiceCard from "@/ui/components/common/cards/service-card";

export default function ProfilePage(){
  return (
    <div  className="space-y-10 md:space-y-18 lg:space-y-24 pb-40">
        
        <div>
            <div className="bg-brand-200 h-[90px] sm:h-[100px] md:h-[180px] lg:h-[200px] xl:h-[300px]"></div>
            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] rounded-full bg-white flex flex-row items-center justify-center ml-4 md:ml-10 lg:ml-16 xl:ml-24 -mt-[40px] sm:-mt-[50px] md:-mt-[80px] lg:-mt-[110px]">
                <Image alt="" src={"/#"} width={160} height={160} className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] rounded-full bg-slate-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 py-2 md:py-4 md:px-10 lg:px-16 xl:px-24 ">

                <div className="flex flex-col gap-1.5  px-4 md:px-0">

                    <div className="flex md:flex-col sm:flex-row flex-col justify-start items-start sm:justify-between sm:items-start md:justify-start md:items-start">
                        <div className="md:flex-1 grid grid-flow-row">
                            <div className="text-slate-800 font-semibold text-base md:text-xl lg:text-2xl">{"Mentor Name"}</div>
                            <div className="flex flex-row items-center gap-2 text-slate-500 text-left">
                                <div><MapPinIcon className="size-3 lg:size-5" /></div>
                                <div className="font-medium text-xs lg:text-sm">{"The country mentor is living"}</div>
                            </div>
                            <div className="mt-2 lg:mt-3 flex flex-row items-center gap-1 text-xs sm:text-sm md:text-base lg:text-lg font-light text-slate-600 text-left">
                                <div>{"Tag line, "}</div>
                                <div>{"Job title goes here"}</div>
                            </div>  
                        </div>

                        <div className="flex-none md:flex-none w-fit sm:flex">
                            <div className="flex flex-row items-center gap-2 font-light pt-4 sm:pt-1 md:pt-4 lg:pt-6">
                                <div className="bg-brand-600 border border-brand-500 text-white px-2 py-0.5 sm:px-6 sm:py-1.5 rounded text-xs md:text-sm font-semibold text-center">{"Personal website"}</div>
                            </div>                              
                        </div>
                    </div>

 
                                   
                </div>

                <div className="flex flex-col gap-2 mt-10 md:mt-0">
                    <div className="hidden md:block text-xs md:text-sm text-slate-400 font-nromal ml-auto w-full md:w-11/12 lg:w-9/12 xl:w-7/12">{"About me"}</div>
                    <div className="bg-slate-100 py-8 px-4  md:p-4 rounded ml-auto w-full md:w-11/12 lg:w-9/12 xl:w-7/12 ">
                        <div className="md:hidden text-xs md:text-sm text-slate-500 font-nromal mb-2">{"About me"}</div>
                        <p className="md:text-balance text-xs md:text-sm/relaxed lg:text-base/relaxed text-slate-700 w-full sm:w-11/12 md:w-full">
                            {"Connect with top industry mentors, gain personalized guidance, and take your career to the next level. Sign up for free and start your journey today."}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-4 md:px-10 lg:px-16 xl:px-24">
            <div className="text-slate-800 font-bold text-base px-4 md:px-0">
                {"Services"}
             <div className="text-slate-500 font-normal text-sm">{"See the mentor`s services and apply/buy today!"}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">

                            {
                                [1,2,3,4,5,6].map((serviceItem, idx)=>{
                                    return(    
                                        <ServiceCard key={`serviceItem-${idx}-card`}/>                              
                                    );
                                })
                            }
            </div>
        </div>


    </div>
  );
}