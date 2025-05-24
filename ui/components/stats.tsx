'use client';
import Image from "next/image";

export default function Stats(){
    return (
        <div className="w-full md:w-11/12 lg:w-9/12  text-center mx-auto py-16">
            <div className="grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 items-stretch justify-stretch">
        
                <div className="hidden lg:block">
                      <div className=""><Image alt="" src={"/assets/images/about/about1.png"} width={1334} height={920} /></div>
                </div>
        
                <div className="grid grid-flow-row justify-between gap-8 lg:gap-0">
                       <div className="text-left flex flex-col items-start ">
                         <div className="text-brand-500 font-semibold text-md">We’ve helped hundreds of recent graduates and professionals</div>
                         <div className="text-black font-semibold text-3xl lg:text-5xl text-balance">Empowering Data Science Careers, One Connection at a Time</div>
                       </div>
        
                     <div className="lg:hidden">
                      <div className=""><Image alt="" src={"/assets/images/about/about1.png"} width={1334} height={920} /></div>
                     </div>
        
                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                            <div className="text-left flex flex-col items-start">
                              <div className="text-brand-400 text-7xl">600+</div>
                              <div className="text-black  text-lg">Scheduled 1-on-1 Meetings</div>
                            </div>
                            <div className="text-left flex flex-col items-start">
                              <div className="text-brand-400  text-7xl">100+</div>
                              <div className="text-black text-lg">Registered Mentees</div>
                            </div>
        
                            <div className="text-left flex flex-col items-start">
                              <div className="text-brand-400   text-7xl">20k</div>
                              <div className="text-black text-lg">Global Website Visitors</div>
                            </div>
                            <div className="text-left flex flex-col items-start">
                              <div className="text-brand-400 text-7xl">50+</div>
                              <div className="text-black  text-lg">5-star reviews</div>
                            </div>
                       </div>
                </div>
            </div>
        </div>       
    );
}