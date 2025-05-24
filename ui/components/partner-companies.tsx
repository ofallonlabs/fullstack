'use client';
import Image from "next/image";

export default function PartnerCompanies(){
    return (
        <div className="w-full md:w-11/12 lg:w-9/12 flex flex-col justify-center items-center text-center mx-auto py-16 gap-6 border-t border-slate-200">
            <div className="text-slate-700">Our Mentors are from small startups to the world’s largest companies</div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
                        <Image className="h-[32px]"  alt="" src={"/assets/images/brands/1.png"} width={214} height={46} />
                        <Image className="h-[32px] object-center object-contain"  alt="" src={"/assets/images/brands/2.png"} width={214} height={46} />
                        <Image className="h-[32px] object-center object-contain"  alt="" src={"/assets/images/brands/3.png"} width={214} height={46} />
                        <Image className="h-[32px] object-center object-contain"  alt="" src={"/assets/images/brands/4.png"} width={214} height={46} />
                        <Image className="h-[32px] object-center object-contain"  alt="" src={"/assets/images/brands/5.png"} width={214} height={46} />
                        <Image className="h-[32px] object-center object-contain"  alt="" src={"/assets/images/brands/6.png"} width={214} height={46} />
            </div>
        </div>
    );
}