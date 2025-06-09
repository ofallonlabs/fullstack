'use client';

import Image from "next/image";
import { ArrowLongRightIcon  } from '@heroicons/react/24/outline';


import Header from "@/ui/components/common/nav/header";
import Footer from "@/ui/components/public/footer";
import Stats from "@/ui/components/public/stats";
import PartnerCompanies from "@/ui/components/public/partner-companies";
import FAQ from "@/ui/components/public/faq";
import Link from "next/link";

 

export default function Home() {

  return (
   <>
     <Header/>

      <div className="min-h-[500px]">
        <div className="mx-auto 2xl:w-11/12 lg:px-8 px-6 ">
        
          <div className=" py-10 text-center">
                <div className="text-gray-800 font-semibold text-4xl lg:text-6xl">Data Science Mentorship, Simplified</div>
                <div className="flex flex-col gap-6 items-center justify-between mt-4 ">
                  <div className="flex-none text-gray-600 w-10/12 lg:w-7/12 text-xl ">
                    Accelerate your career in Data Science with top mentors in tech-industry across the U.S. and Canada. Discover insights, expand your skills, and unlock new opportunities.
                  </div>
                  <div className="flex-none w-full lg:w-fit px-8">
                    <div className="grid grid-flow-row lg:grid-flow-col gap-2 text-md text-slate-500 font-light">
                      <Link href={"/auth/register"} className="transition-all duration-200 hover:cursor-pointer order-2 md:order-1 bg-white hover:bg-slate-200 border border-slate-200 text-gray-900  px-10 py-4 lg:py-5 rounded-md text-center w-full lg:w-fit">Become a mentor</Link>
                      <Link href={"/mentors"} className="transition-all duration-200 order-1 md:order-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold  px-10 py-4 lg:py-5 rounded-md text-center w-full lg:w-fit flex flex-row gap-1 items-center">
                        Find a mentor
                        <ArrowLongRightIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      </Link>
                    </div>
                  </div>
                </div>
          </div>   


          <div className="w-full md:w-10/12 lg:w-7/12 flex flex-row justify-center items-center text-center mx-auto">
            <div className="hidden lg:block"><Image alt="" src={"/assets/images/home/home4.jpg"} width={1436} height={753} /></div>
            <div className="lg:hidden"><Image alt="" src={"/assets/images/home/home3.jpg"} width={287} height={347} /></div>
          </div> 


          <PartnerCompanies/>

          <div className="w-full md:w-10/12 lg:w-7/12 text-center mx-auto py-16 gap-6">
            <div className="text-center flex flex-col gap-4">
              <div className="text-brand-600 text-md">Features</div>
                <div className="text-gray-800 font-bold text-4xl">Find the best mentors quickly</div>
                <div className=" text-xl">
                    Discover mentors from 500 fortune companies, gain personalized guidance, and take your career to the next level. Sign up for free and start your journey today.
                </div>
            </div>
          </div>

          <div className="w-full md:w-10/12 lg:w-7/12 text-left mx-auto py-16 space-y-16">
            <div className="grid grid-flow-row lg:grid-flow-col gap-16 items-stretch justify-between">

                <div className="flex flex-col items-start justify-start gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home8.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Qualified Mentors</div>
                  <div className="text-slate-600 text-sm">Our mentors are seasoned professionals from top 500 Fortune companies who’ve been there, done that.</div>
                </div>

                <div className="flex flex-col items-start justify-start gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home9.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Secure Payment</div>
                  <div className="text-slate-600 text-sm">Enjoy a safe and hassle-free payment experience with our trusted system.</div>
                </div>

                <div className="flex flex-col items-start justify-start gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home10.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Instant Booking</div>
                  <div className="text-slate-600 text-sm">Book your mentorship sessions instantly and start making progress right away.</div>
                </div>




            </div>

            <div className="grid grid-flow-row lg:grid-flow-col gap-16 items-stretch justify-between">


                <div className="flex flex-col items-start justify-start gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home11.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Seamless Application Process</div>
                  <div className="text-slate-600 text-sm">Explore mentors for free, send applications, and receive responses within seven days.</div>
                </div>

                <div className="flex flex-col items-start justify-start gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home12.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Privacy Protected</div>
                  <div className="text-slate-600 text-sm">Your data is secure with top-level encryption and strict privacy measures.</div>
                </div>

                <div className="flex flex-col items-start justify-start gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home13.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Satisfaction Guaranteed</div>
                  <div className="text-slate-600 text-sm">Request a full refund if you’re not satisfied with the mentorship experience.</div>
                </div>


            </div>
          </div>

          <div className="w-full md:w-10/12 lg:w-8/12 flex flex-row justify-center items-center text-center mx-auto py-32">
            <div className=""><Image alt="" src={"/assets/images/home/testimonials/1.png"} width={1166} height={675} /></div> 
          </div>

          <div className="w-full md:w-10/12 lg:w-7/12 text-center mx-auto py-16 gap-6">
            <div className="text-center flex flex-col gap-4">
              <div className="text-brand-400 text-sm rounded-2xl py-1 px-3 bg-brand-50/60 w-fit mx-auto font-bold">Features</div>
                <div className="text-gray-800 font-bold text-4xl">Pay securely and book instantly</div>
                <div className=" text-xl text-gray-500">
                    Enjoy safe payments and instant booking for a seamless mentorship experience.
                </div>
            </div>
          </div> 

          <div className="w-full md:w-10/12 lg:w-7/12 flex flex-row justify-center items-center text-center mx-auto">
            <div className="hidden lg:block"><Image alt="" src={"/assets/images/home/home33.jpg"} width={888} height={570} /></div>
            <div className="lg:hidden"><Image alt="" src={"/assets/images/home/home34.jpg"} width={603} height={609} /></div>
          </div> 
          
          <div className="w-full md:w-10/12 lg:w-7/12 text-left mx-auto py-16 space-y-16 border-b border-slate-200">
            <div className="grid grid-flow-row lg:grid-flow-col gap-16 items-stretch justify-between">

                <div className="flex flex-col items-center justify-center gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home22.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Our Vission</div>
                  <div className="text-slate-600 text-sm text-center">
                    To be the leading mentorship platform for data science professionals, creating a space where knowledge and guidance flow freely between mentors and mentees. We envision a world where every aspiring data professional has access to the mentorship they need to succeed and excel in their careers.
                  </div>
                  <Link href={"/about"} className="text-brand-500 text-md text-center font-semibold flex flex-row items-center gap-2">
                    <div className="hover:underline">Learn more</div>
                    <ArrowLongRightIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                  </Link>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home21.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Our Mission</div>
                  <div className="text-slate-600 text-sm text-center">
                    To empower individuals in data careers by providing accessible, meaningful, and one-on-one mentorship opportunities. Our platform connects ambitious mentees with experienced mentors, fostering personal growth, professional development, and a strong, supportive community across the U.S. and Canada.
                  </div>
                  <Link href={"/about"} className="text-brand-500 text-md text-center font-semibold flex flex-row items-center gap-2">
                    <div className="hover:underline">Learn more</div>
                    <ArrowLongRightIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                  </Link>
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                  <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/home/home20.svg"} width={56} height={56} />
                  <div className="text-gray-800 font-bold text-lg">Our Goal</div>
                  <div className="text-slate-600 text-sm text-center">
                    To seamlessly connect mentees with mentors, offering secure, fast, and reliable booking and payment options. Our platform is designed to make finding, booking, and benefiting from personalized mentorship as simple and impactful as possible for all data professionals.
                  </div>
                  <Link href={"/about"} className="text-brand-500 text-md text-center font-semibold flex flex-row items-center gap-2">
                    <div className="hover:underline">Learn more</div>
                    <ArrowLongRightIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                  </Link>
                </div>




            </div> 
          </div>


          <FAQ/>  



          
          <Stats/> 


        </div>              
      </div>

    <Footer/>

   </>
  )

}
