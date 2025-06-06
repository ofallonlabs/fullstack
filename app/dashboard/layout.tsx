'use client'

import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { ApplicationsIcon, HomeIcon, MentorShipsIcon, NotificationsIcon, ServicesIcon, SettingsIcon, SupportIcon, LogoutIcon } from "@/ui/svgs";

import { classNames } from "@/utils/Utils";

import NotificationFlyout from "@/ui/elements/notification-flyout";
import AvatarFlayout from "@/ui/elements/avatar-flyout";
import Header from "@/ui/components/common/nav/auth/header";

import BottomSheet from "@/ui/components/dashboard/bottom-sheet";
import SignoutButton from "@/ui/elements/signout-button";

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon , current: true },
  { name: 'Mentorships', href: '#', icon: MentorShipsIcon, current: false },
  { name: 'Application', href: '#', icon: ApplicationsIcon, current: false },
  { name: 'Services', href: '#', icon: ServicesIcon, current: false },
  { name: 'Notifications', href: '#', icon: NotificationsIcon, current: false },
]

const bottomSheetNavigation = [
  { name: 'Home', href: '#', icon: HomeIcon , current: true },
  { name: 'Mentorships', href: '#', icon: MentorShipsIcon, current: false },
  { name: 'Application', href: '#', icon: ApplicationsIcon, current: false },
  { name: 'Services', href: '#', icon: ServicesIcon, current: false },
  { name: 'Settings', href: '#', icon: SettingsIcon, current: false },
]


const navigation_bottom = [
  { name: 'Support', href: '#', icon: SupportIcon , current: false },
  { name: 'Settings', href: '#', icon: SettingsIcon, current: false },
]

 
 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}){
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="relative">
        <div className="sticky top-0 inset-x-0 z-50 sm:hidden">
          <Header/>        
        </div>

        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <Image alt="" src={"/logo_full.svg"} width={184} height={35} />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-brand-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                style={classNames(
                                  item.current ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                 <li className="-mx-6 mt-auto overflow-hidden">

                  <ul role="list" className="-mx-2 space-y-1 p-6">
                    {navigation_bottom.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-brand-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon style={classNames(
                              item.current ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600',
                              'size-6 shrink-0',
                            )}/>
                          
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-row items-center gap-2 px-2 py-4 border-t border-t-gray-200">
                    <div className="flex-none w-fit">
                      <div className="relative flex max-w-xs items-center rounded-full bg-brand-600 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 focus:outline-hidden">
                        <Image className="object-center object-contain w-[40px] aspect-square rounded-full" alt="" src={"/assets/images/about/avatar1.jpg"} width={24} height={24}/>
                        <span className="absolute right-0 bottom-0 block size-2.5 rounded-full bg-brand-400 ring-2 ring-white" /> 
                      </div>                      
                    </div>
                    <div className="flex-1 text-left flex flex-col items-stretch justify-center">
                      <div className="font-semibold text-gray-800  text-sm line-clamp-1 w-[180px]">Saeed Mirshekari</div>
                      <div className="font-normal text-gray-600  text-xs line-clamp-1 w-[180px]">Email Address</div>
                    </div>
                    <div className="flex-none w-fit hover:bg-slate-300/30 rounded-full hover:cursor-pointer p-2 transition-colors duration-200">
                      <SignoutButton>
                        <LogoutIcon
                            style={classNames('size-6 shrink-0')}
                        />
                      </SignoutButton>                    
                    </div> 

                  </div>
                </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

 
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">

           
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
                    <Image alt="" src={"/logo_full.svg"} width={184} height={35} />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-brand-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon style={classNames(
                              item.current ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600',
                              'size-6 shrink-0',
                            )}/>
                          
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> 

                <li className="-mx-6 mt-auto overflow-hidden">

                  <ul role="list" className="-mx-2 space-y-1 p-6">
                    {navigation_bottom.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-brand-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon style={classNames(
                              item.current ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600',
                              'size-6 shrink-0',
                            )}/>
                          
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-row items-center gap-2 px-2 py-4 border-t border-t-gray-200">
                    <div className="flex-none w-fit">
                      <div className="relative flex max-w-xs items-center rounded-full bg-brand-600 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 focus:outline-hidden">
                        <Image className="object-center object-contain w-[40px] aspect-square rounded-full" alt="" src={"/assets/images/about/avatar1.jpg"} width={24} height={24}/>
                        <span className="absolute right-0 bottom-0 block size-2.5 rounded-full bg-brand-400 ring-2 ring-white" /> 
                      </div>                      
                    </div>
                    <div className="flex-1 text-left flex flex-col items-stretch justify-center">
                      <div className="font-semibold text-gray-800  text-sm line-clamp-1 w-[180px]">Saeed Mirshekari</div>
                      <div className="font-normal text-gray-600  text-xs line-clamp-1 w-[180px]">Email Address</div>
                    </div>
                    <div className="flex-none w-fit hover:bg-slate-300/30 rounded-full hover:cursor-pointer p-2 transition-colors duration-200">
                      <SignoutButton>
                        <LogoutIcon
                            style={classNames('size-6 shrink-0')}
                        />
                      </SignoutButton>                    
                    </div> 
                  </div>
                </li>
              </ul>
            </nav>
          </div>

        </div>


        <div className="sticky top-0 z-40 items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 hidden sm:flex lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 hidden sm:block lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-gray-900">Menu</div>
          <div className="lg:hidden flex flex-row items-center gap-6">
            <Link href={"/contact"}>
                <SupportIcon/>
            </Link>
            <NotificationFlyout/>
            <AvatarFlayout/>
          </div>
        </div>

        <main className="lg:pl-72 bg-slate-50 min-h-screen flex flex-col">

          <div className="">
            {children}
          </div>
         
        </main>

         <BottomSheet navigation={bottomSheetNavigation}/>

      </div>
    </>
  )
}
