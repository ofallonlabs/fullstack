"use client";

import Image from "next/image";
import { JSX, SVGProps } from "react";

import Stats from "@/ui/components/public/stats";
import PartnerCompanies from "@/ui/components/public/partner-companies";

const navigation_footer = {
  product: [
    { name: 'Overview', href: '#' },
    { name: 'Features', href: '#' }
  ],
  company: [
    { name: 'About us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Newsletter', href: '#' },
    { name: 'Help Center', href: '#' }, 
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' }
  ],
  social: [
    {
      name: 'X',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 448 512" {...props}> 
          <path
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg> 
      ),
    }
  ],
}


export default function Home() {

  return (
   <>
 

    <div className="min-h-[500px]">

      <div className="mx-auto 2xl:w-11/12 lg:px-8 px-6 ">
       
 
        <div className="w-full lg:w-7/12 text-center mx-auto py-4 lg:py-16 gap-2 lg:gap-6">
           <div className="text-center flex flex-col gap-4">
             <div className="text-brand-600 text-md">About us</div>
              <div className="text-gray-800 font-bold text-4xl">About Us</div>
              <div className=" text-xl text-gray-600">
                  Learn more about the company and the team behind it.
              </div>
           </div>
        </div>
 
  
        <Stats/> 


  
        <div className="w-full md:w-11/12 lg:w-9/12  text-center mx-auto py-16">
           <div className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-2 items-stretch justify-stretch">

 

             <div className="flex flex-col gap-8">
               <div className="text-left flex flex-col items-start ">
                 <div className="text-brand-500 font-semibold text-md">The power of one-on-one mentorship in Data Science careers</div>
                 <div className="text-black font-semibold text-3xl lg:text-5xl">About O’Mentors</div>
               </div>

                <div className="lg:hidden">
                    <div className=""><Image alt="" src={"/assets/images/about/about2.jpg"} width={677} height={676} /></div>
                </div>

               <div className="flex flex-col gap-4 text-black text-base text-left text-balance">
                    <div>
                        Welcome to O&apos;Mentors, the premier platform for connecting aspiring professionals with top mentors in the field of Data Science. Our mission is simple: to bridge the gap between ambition and expertise.
                    </div>

                    <div>
                        Whether you&apos;re a recent graduate, a career changer, or an experienced professional aiming for the next level, we provide tailored mentorship that aligns with your career goals. With a focus on 1-on-1 mentoring, we ensure that every mentee receives personalized guidance, actionable advice, and industry insights to accelerate their career.
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>At O&apos;Mentors, we specialize in the following areas:</div>
                        <div className="px-8">
                            <ul className="list-disc">
                                <li>Data Science</li>
                                <li>Data Engineering</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        Our mentors are seasoned industry experts with real-world experience who are dedicated to helping you succeed. Together, we’ll navigate challenges, build skills, and achieve milestones that matter to you.
                    </div>

               </div>

             </div>


            <div className="hidden lg:block">
              <div className="w-11/12 mx-auto"><Image alt="" src={"/assets/images/about/about2.jpg"} width={677} height={676} /></div>
            </div>

           </div>
  
        </div> 


        <div className="w-full md:w-11/12 lg:w-9/12  text-center mx-auto py-16">
           <div className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-2 items-stretch justify-stretch">


            <div className="hidden lg:block relative">
                <div className=""></div>
              <div className="w-11/12 mx-auto h-full"><Image className="w-[557px] saaedfilter aspect-square object-cover" alt="" src={"/assets/images/about/about3.jpg"} width={677} height={676} /></div>
            </div> 

             <div className="flex flex-col gap-8">
               <div className="text-left flex flex-col items-start ">
                 <div className="text-brand-500 font-semibold text-md">Empowering connections, transforming careers</div>
                 <div className="text-black font-semibold text-3xl lg:text-5xl">O&apos;Mentors Story</div>
               </div>

                <div className="lg:hidden">
                    <div className=""><Image className="saaedfilter" alt="" src={"/assets/images/about/about3.jpg"} width={677} height={676} /></div>
                </div>

               <div className="flex flex-col gap-4 text-black text-base text-left text-balance">
                    <div>
                        O&apos;Mentors was founded by Saeed Mirshekari, inspired by his journey through challenges and his passion for mentorship. With over two years of 1-on-1 mentoring experience, he witnessed firsthand the transformative impact of personalized guidance and sought to create a platform that connects mentees with top mentors to achieve their career goals.
                    </div>

                    <div>
                       The concept of O&apos;Mentors emerged during a pivotal period in Saeed&apos;s life. In 2015, after leaving a postdoc in Brazil, he returned to the USA, facing significant personal and professional challenges. Despite feeling isolated and lacking access to resources and connections, he persevered through the transition into industry.
                    </div>

                    <div>
                         Motivated by his experiences, Saeed envisioned O&apos;Mentors as a platform to help others navigate similar transitions more easily, especially those from academia or with limited industry networks. Today, O’Mentors stands as a professional and impactful solution, bridging the gap between ambition and opportunity.
                    </div>

 

               </div>

             </div>


           </div>
  
        </div> 


        <PartnerCompanies/>


        <div className="w-full md:w-11/12 lg:w-9/12  text-center mx-auto py-16">
           <div className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-2 items-stretch justify-stretch">

 

             <div className="flex flex-col gap-8">
               <div className="text-left flex flex-col items-start ">
                 <div className="text-brand-500 font-semibold text-md">Get to know us</div>
                 <div className="text-black font-semibold text-3xl lg:text-5xl">We’re just getting started</div>
               </div>

                <div className="lg:hidden">
                    <div className=""><Image alt="" src={"/assets/images/about/about4.jpg"} width={791} height={674} /></div>
                </div>

               <div className="flex flex-col gap-4 text-black text-base text-left text-balance">
                    <div>
                        O&apos;Mentors brings value by connecting you with top industry experts who provide personalized, one-on-one guidance tailored to your unique career goals.
                    </div>

                    <div>
                        Whether you&apos;re transitioning into Data Science or looking to advance, our platform offers a flexible, secure, and efficient way to gain insights, build skills, and accelerate your professional growth.
                    </div>
                    <div className="flex-none w-full md:w-fit mt-8">
                        <div className="grid grid-flow-row md:grid-flow-col gap-2 text-md text-slate-500 font-light">
                            <div className="order-2 md:order-1 bg-white border border-slate-200 text-gray-900  px-6 py-3 rounded-md text-center w-full md:w-fit">Explore all mentors</div>
                            <div className="order-1 md:order-2 bg-brand-500 text-white font-semibold px-6 py-3 rounded-md text-center w-full md:w-fit">Become a mentor</div>
                        </div>
                     </div>
               </div>

             </div>


            <div className="hidden lg:block">
              <div className=""><Image alt="" src={"/assets/images/about/about4.jpg"} width={791} height={674} /></div>
            </div>

           </div>
  
        </div> 

        <div className="w-full md:w-10/12 lg:w-8/12 text-center mx-auto py-16 gap-6">
           <div className="text-center flex flex-col gap-4">
             <div className="text-brand-600 text-md">We’re hiring!</div>
              <div className="text-gray-800 font-bold text-4xl">Meet our team</div>
              <div className=" text-xl text-balance">
                  Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
              </div>
              <div className="flex-none w-full md:w-fit mx-auto mt-8">
                  <div className="grid grid-flow-row md:grid-flow-col gap-2 text-md text-slate-500 font-light">
                    <div className="order-2 md:order-1 bg-white border border-slate-200 text-gray-900  px-12 py-3 rounded-md text-center w-full md:w-fit">About us</div>
                  </div>
                </div>
           </div>
        </div>

        <div className="w-full md:w-10/12 lg:w-8/12 text-center mx-auto py-8 gap-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
                <div className="flex flex-col items-center justify-center bg-brand-50/30 py-8">
                    <div className="mb-4">
                        <Image className="rounded-full" alt="" src={"/assets/images/about/avatar1.jpg"} width={80} height={80}/>
                    </div>
                    <div className="text-center text-lg font-semibold text-black">
                        Saeed Mirshekari
                    </div>
                    <div className="text-center text-base font-normal text-brand-600 mb-2">
                        Founder & Director
                    </div>
                    <div className="text-sm text-slate-600 text-center mb-4">
                        Ideation | Planning | Execution | Growth
                    </div>
                    <div>
                        {navigation_footer.social.filter((item)=> item.name === "Linkedin").map((item) => (
                            <a key={item.name} href={item.href} className="text-blue-600 hover:text-blue-800">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-brand-50/30 py-8">
                    <div className="mb-4">
                        <Image className="rounded-full" alt="" src={"/assets/images/about/avatar2.jpg"} width={80} height={80}/>
                    </div>
                    <div className="text-center text-lg font-semibold text-black">
                        Cinna Karimi
                    </div>
                    <div className="text-center text-base font-normal text-brand-600 mb-2">
                        Product Developer
                    </div>
                    <div className="text-sm text-slate-600 text-center mb-4">
                        Python | Typescript | Vercel | Supabase
                    </div>
                    <div>
                        {navigation_footer.social.filter((item)=> item.name === "Linkedin").map((item) => (
                            <a key={item.name} href={item.href} className="text-blue-600 hover:text-blue-800">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-brand-50/30 py-8">
                    <div className="mb-4">
                        <Image className="rounded-full" alt="" src={"/assets/images/about/avatar3.jpg"} width={80} height={80}/>
                    </div>
                    <div className="text-center text-lg font-semibold text-black">
                        Pegah Habibi
                    </div>
                    <div className="text-center text-base font-normal text-brand-600 mb-2">
                        Product Designer
                    </div>
                    <div className="text-sm text-slate-600 text-center mb-4">
                        User Experience | User Interface | Figma
                    </div>
                    <div>
                        {navigation_footer.social.filter((item)=> item.name === "Linkedin").map((item) => (
                            <a key={item.name} href={item.href} className="text-blue-600 hover:text-blue-800">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                </div>

           </div>
        </div>


        <div className="bg-brand-50/30 w-full md:w-11/12 lg:w-9/12 text-center mx-auto py-8">
            <div className="text-center flex flex-col gap-4">
                <div className="text-brand-600 text-md">Our values</div>
                <div className="text-gray-800 font-bold text-4xl">How we work at O&apos;Mentors</div>
                <div className=" text-xl text-gray-600 text-balance">
                  Our shared values keep us connected and guide us as one team.
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch justify-between pt-8">
            
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/about/hire1.svg"} width={48} height={48} />
                    <div className="text-gray-800 font-bold text-xl">Care about our team</div>
                    <div className="text-gray-600 text-base text-center text-balance">
                       Understand what matters to our employees. Give them what they need to do their best work.
                    </div> 
                </div>
            
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/about/hire2.svg"} width={48} height={48} />
                    <div className="text-gray-800 font-bold text-xl">Be excellent to each other</div>
                    <div className="text-gray-600 text-base text-center text-balance">
                       No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.
                    </div> 
                </div>
            
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/about/hire3.svg"} width={48} height={48} />
                    <div className="text-gray-800 font-bold text-xl">Pride in what we do</div>
                    <div className="text-gray-600 text-base text-center text-balance">
                       Value quality and integrity in everything we do. At all times. No exceptions.
                    </div> 
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                    <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/about/hire4.svg"} width={48} height={48} />
                    <div className="text-gray-800 font-bold text-xl">Don&apos;t #!&$ the customer</div>
                    <div className="text-gray-600 text-base text-center text-balance">
                       Understand customers&apos; stated and unstated needs. Make them wildly successful.
                    </div> 
                </div>
            
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/about/hire5.svg"} width={48} height={48} />
                    <div className="text-gray-800 font-bold text-xl">Do the impossible</div>
                    <div className="text-gray-600 text-base text-center text-balance">
                       Be energized by difficult problems. Revel in unknowns. Ask &qoute;Why?&qoute;, but always question, &qoute;Why not?&qoute;
                    </div> 
                </div>           
            
                <div className="flex flex-col items-center justify-center gap-4">
                    <Image className="w-[48px] aspect-square"  alt="" src={"/assets/images/about/hire6.svg"} width={48} height={48} />
                    <div className="text-gray-800 font-bold text-xl">Sweat the small stuff</div>
                    <div className="text-gray-600 text-base text-center text-balance">
                       We believe the best products come from the best attention to detail. Sweat the small stuff.
                    </div> 
                </div>             
            </div> 
        </div>
 

        <div className="w-10/12 lg:w-7/12 text-center mx-auto pt-12 pb-4 gap-6">
           <div className="text-center flex flex-col gap-4">
             <div className="text-brand-400 text-sm rounded-2xl py-1 px-3 bg-brand-50/60 w-fit mx-auto font-bold">Open positions</div>
              <div className="text-gray-800 font-bold text-4xl">We’re looking for talented people</div>
              <div className=" text-xl text-gray-600">
                  We’re a 100% remote team spread all across the world. Join us!
              </div>
           </div>
        </div> 

        <div className="w-4/12 flex flex-row justify-center items-center text-center mx-auto">
           <div className=""><Image alt="" src={"/assets/images/about/about7.png"} width={1113} height={750} /></div>
        </div> 


        <div className="w-full md:w-11/12 lg:w-9/12 text-left mx-auto py-16 space-y-8">
            <div className="text-xl text-black font-bold">Design</div>
            <div className="">
               <div className="rounded-xl border border-gray-400 p-8">
                   <div className="text-xl text-black font-semibold">
                        Product Design
                   </div>
                   <div className="text-gray-600 text-base font-normal">
                     We’re looking for a mid-level product designer to join our team.
                   </div>
                   <div className="flex flex-row gap-8 mt-8 text-base text-gray-600">
                        <div className="flex flex-row gap-2">
                            <svg focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span>Full-time</span>
                        </div>

                        <div className="flex flex-row gap-2">
                           <svg focusable="false" className="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.672 14.33c0 1.29.99 2.33 2.22 2.33h2.51c1.07 0 1.94-.91 1.94-2.03 0-1.22-.53-1.65-1.32-1.93l-4.03-1.4c-.79-.28-1.32-.71-1.32-1.93 0-1.12.87-2.03 1.94-2.03h2.51c1.23 0 2.22 1.04 2.22 2.33M12 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span>50k - 100k</span>
                        </div>
                   </div>
               </div>
            </div>
        </div>          

      </div>        

    </div>

 
   </>
  )

}
