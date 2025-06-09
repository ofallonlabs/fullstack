"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from 'react'

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


export default function Footer(){
    return (
        <footer className="bg-brand-50/60">
        
              <div className="mx-auto 2xl:w-11/12 lg:px-8 px-6 ">
               
                <div className="border-b border-gray-900/10 py-10">
                      <div className="text-gray-800 font-bold text-3xl">Join us today!</div>
                      <div className="flex flex-col md:flex-row gap-6 items-end justify-between mt-4 md:mt-0">
                        <div className="flex-1 text-xl ">
                          Connect with top industry mentors, gain personalized guidance, and take your career to the next level. Sign up for free and start your journey today.
                        </div>
                        <div className="flex-none w-full md:w-fit ">
                          <div className="grid grid-flow-row md:grid-flow-col gap-2 text-md text-slate-500 font-light ">
                            <Link href={"/"} className="transition-all duration-200 hover:cursor-pointer order-2 md:order-1 bg-white hover:bg-slate-200 border border-slate-200 text-gray-900  px-6 py-3 rounded-md text-center w-full md:w-fit">Learn More</Link>
                            <Link href={"/auth/register"} className="transition-all duration-200 hover:cursor-pointer order-1 md:order-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-md text-center w-full md:w-fit">Get Started</Link>
                          </div>
                        </div>
                      </div>
                </div>    
                
              </div>        
        
              <div className="mx-auto 2xl:w-11/12 px-6 pt-16 pb-8  lg:px-8 ">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        
                  <div className="flex flex-col gap-2">
                      <Image alt="" src={"/logo_full.svg"} width={184} height={35} />
                      <div className="text-wrap w-full md:w-10/12 lg:w-8/12">We connect mentees with expert mentors from Fortune 500 companies for personalized career growth.</div>
                  </div>
        
        
                  <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                      <div>
                        <h3 className="text-sm/6 text-gray-500 font-semibold">Product</h3>
                        <ul role="list" className="mt-6 space-y-4">
                          {navigation_footer.product.map((item) => (
                            <li key={item.name}>
                              <a href={item.href} className="text-md font-semibold text-gray-600 hover:text-gray-950">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-10 md:mt-0">
                        <h3 className="text-sm/6 text-gray-500 font-semibold">Company</h3>
                        <ul role="list" className="mt-6 space-y-4">
                          {navigation_footer.company.map((item) => (
                            <li key={item.name}>
                              <a href={item.href} className="text-md font-semibold text-gray-600 hover:text-gray-950">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                      <div>
                        <h3 className="text-sm/6 text-gray-500 font-semibold">Resources</h3>
                        <ul role="list" className="mt-6 space-y-4">
                          {navigation_footer.resources.map((item) => (
                            <li key={item.name}>
                              <a href={item.href} className="text-md font-semibold text-gray-600 hover:text-gray-950">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-10 md:mt-0">
                        <h3 className="text-sm/6 text-gray-500 font-semibold">Legal</h3>
                        <ul role="list" className="mt-6 space-y-4">
                          {navigation_footer.legal.map((item) => (
                            <li key={item.name}>
                              <a href={item.href} className="text-md font-semibold text-gray-600 hover:text-gray-950">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
         
                <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                  <div className="flex gap-x-6 md:order-2">
                    {navigation_footer.social.map((item) => (
                      <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                        <span className="sr-only">{item.name}</span>
                        <item.icon aria-hidden="true" className="size-6" />
                      </a>
                    ))}
                  </div>
                  <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
                    Made with 💝 in St. Louis MO, USA ©2025. All rights reserved for O’Fallon Labs LLC.
                  </p>
                </div>
              </div>
        </footer>
    );
}