"use client";

import { ApplicationsIcon, HomeIcon, MentorShipsIcon, ServicesIcon, SettingsIcon } from "@/ui/svgs";
import Link from "next/link";
import { classNames } from "@/utils/Utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


const bottomsheet_navigation_data = [
  { name: 'Home', href: 'home', icon: HomeIcon , current: false },
  { name: 'Mentorships', href: 'mentorships', icon: MentorShipsIcon, current: false },
  { name: 'Application', href: 'applications', icon: ApplicationsIcon, current: false },
  { name: 'Services', href: 'services', icon: ServicesIcon, current: false },
  { name: 'Settings', href: 'settings', icon: SettingsIcon, current: false },
]


export default function BottomSheet(){
  const [navigation, setNavigationBottomSheet] = useState(bottomsheet_navigation_data);
  const pathName = usePathname();

  useEffect(()=>{
    
    setNavigationBottomSheet((cur) => {
      return cur.map((navItem)=>{
        return {...navItem, current: pathName.toLowerCase().includes(navItem.href.toLowerCase())}
      })
    }) 

  },[pathName, setNavigationBottomSheet])    
    return (
                <div className="sticky bottom-0 inset-x-0 bg-white shadow z-50">
                    <div className=" grid grid-cols-5 border-t border-t-gray-200 h-fit w-full sm:hidden">

                          {
                            navigation.map((navItem, idx) => {
                                return (
                                    <Link key={`bottomSheetNavitem-${navItem.name}-${idx}`} href={navItem.href} 
                                        className={classNames(navItem.current  ? 'border-t-[2px] border-t-brand-500' : '', 'col-span-1 py-2  mx-2')}>
                                        <div className="flex flex-col gap-1.5 items-center justify-between">
                                            <navItem.icon style="text-brand-600"/>
                                            <div className={classNames(navItem.current  ? 'text-brand-600' : 'text-gray-800', 'text-center text-xs font-bold')}>{navItem.name}</div>
                                        </div>
                                    </Link>
                                );
                            })
                          }
                                                    
                    </div>
                 </div>
        
    );
}