"use client";

import { JSX, useEffect, useState } from 'react';
import Link from "next/link";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ApplicationsIcon, HomeIcon, MentorShipsIcon, NotificationsIcon, ServicesIcon, SettingsIcon, SupportIcon } from "@/ui/svgs";
import SideNavbar from "@/ui/components/dashboard/side-navbar";
import DashboardTopHeader from "@/ui/components/dashboard/top-header";
import { usePathname } from 'next/navigation';

const navigation_data = [
  { name: 'Home', href: '/dashboard/home', icon: HomeIcon , current: false },
  { name: 'Mentorships', href: '/dashboard/mentorships', icon: MentorShipsIcon, current: false },
  { name: 'Applications', href: '/dashboard/applications', icon: ApplicationsIcon, current: false },
  { name: 'Services', href: '/dashboard/services', icon: ServicesIcon, current: false },
  { name: 'Notifications', href: '/dashboard/notifications', icon: NotificationsIcon, current: false },
]

const navigation_bottom_data = [
  { name: 'Support', href: '/dashboard/support', icon: SupportIcon , current: false },
  { name: 'Settings', href: '/dashboard/settings', icon: SettingsIcon, current: false },
]




export default function DashboardNavDialogLayout({
  children, profile
}: {
  children: React.ReactNode,
  profile:  JSX.Element | null
}){
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState(navigation_data);
  const [navigation_bottom, setNavigationBottom] = useState(navigation_bottom_data);
  const pathName = usePathname();

  useEffect(()=>{

    setNavigationBottom((cur) => {
      return cur.map((navItem)=>{
        return {...navItem, current: pathName.toLowerCase().includes(navItem.href.toLowerCase())}
      })
    });

    setNavigation((cur) => {
      return cur.map((navItem)=>{
        return {...navItem, current: pathName.toLowerCase().includes(navItem.href.toLowerCase())}
      })
    });
    

  },[pathName, setNavigation, setNavigationBottom])


  return (
    <>
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

              <SideNavbar navigation={navigation} navigationBottom={navigation_bottom}>
                {profile}
              </SideNavbar>

            </DialogPanel>
          </div>
        </Dialog>

 
        <DashboardTopHeader navigation={navigation} navigationBottom={navigation_bottom}>
          {profile}
        </DashboardTopHeader>

        <div className="sticky top-0 z-40 items-center gap-x-6 bg-white px-4 py-4 shadow-xs px-2 hidden sm:flex lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 hidden sm:block lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
          <div className="flex-1 text-sm/6 font-semibold text-gray-900">Menu</div>
          <div className="lg:hidden flex flex-row items-center gap-6">
            <Link href={"/contact"}>
                <SupportIcon/>
            </Link>
            {children}
          </div>
        </div>      
    </>
  )
}
