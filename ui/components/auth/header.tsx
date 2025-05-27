'use client';
import Image from "next/image";
import { useState } from 'react'
import { Dialog, DialogPanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline'
import { motion } from 'motion/react'
import Link from "next/link";

import NotificationFlyout from "@/ui/elements/notification-flyout";
import AvatarFlayout from "@/ui/elements/avatar-flyout";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '#' },
  { name: 'About', href: '/about' },
  { name: 'Help', href: '/help' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="bg-white border-b border-b-slate-300 transition-all duration-200 sticky top-0 inset-x-0 z-50">
            <nav aria-label="Global" className="mx-auto  2xl:w-11/12  px-6 py-4 lg:px-8 text-sm text-slate-500 font-light">
            
                <div className="flex flex-row items-center justify-between gap-10">

                    <div className="flex flex-row flex-1 w-full lg:flex-none lg:w-fit justify-between items-center">
                        <Image alt="" src={"/logo_full.svg"} width={184} height={35} />
                        <div className="lg:hidden flex flex-row items-center gap-6">
                            <Link href={"/contact"}>
                                <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.9 4.93l3.54 3.53M4.9 19.07l3.54-3.53M19.05 19.07l-3.54-3.53M19.05 4.93l-3.54 3.53"></path>
                                </svg>
                            </Link>
                            <NotificationFlyout/>
                            <AvatarFlayout/>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-300/15 hover:cursor-pointer transition-all duration-200"
                                >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </button>
                         </div>
                    </div>

                    <div className="hidden lg:flex lg:flex-1">
                        <ul className="flex flex-row gap-8 capitalize">

                        {
                            navigation?.map((nav, idx)=>{
                            return <li key={`navitem-${idx}`}>
                                <Link className="transition-all duration-200 hover:cursor-pointer text-slate-600 hover:text-slate-800 font-medium" href={nav.href}>{nav.name}</Link>
                            </li>
                            })
                        }

                        </ul>
                    </div>

                    <div className="hidden lg:flex flex-row items-center gap-6">
                        <Link href={"/contact"}>
                            <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"></path>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.9 4.93l3.54 3.53M4.9 19.07l3.54-3.53M19.05 19.07l-3.54-3.53M19.05 4.93l-3.54 3.53"></path>
                            </svg>
                        </Link>
                        <NotificationFlyout/>
                        <AvatarFlayout/>
                    </div>

                </div>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden transition duration-300 ease-out data-closed:opacity-0">
                <div className="fixed inset-0 z-10 " />
                <DialogPanel 
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-transparent">

                <div className="pt-4 bg-white">           

                    <div className="flex items-center justify-between  px-6">
                    <div className="flex flex-1 items-center justify-between">
                        
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image alt="" src={"/logo_full.svg"} width={184} height={35} />
                        </a>
                        <div className="lg:hidden flex flex-row items-center gap-6 text-gray-600">
                            <Link href={"/contact"}>
                                <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.9 4.93l3.54 3.53M4.9 19.07l3.54-3.53M19.05 19.07l-3.54-3.53M19.05 4.93l-3.54 3.53"></path>
                                </svg>
                            </Link>
                            <NotificationFlyout/>
                            <AvatarFlayout/>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2 text-gray-700 hover:rounded-md hover:bg-blue-300/15 hover:cursor-pointer transition-all duration-200"
                                >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                    </div>
                    </div>
                    <div className="mt-6 space-y-3 px-11 pb-8 border-b border-b-gray-300 shadow">
                    {navigation.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="transition-all duration-200 hover:cursor-pointer -mx-3 font-medium block rounded-lg px-3 text-base/7  text-slate-500 hover:text-slate-700"
                        >
                        {item.name}
                        </a>
                    ))}
                
                    </div>
                    
                </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
