"use client";

import { ApplicationsIcon, HomeIcon, MentorShipsIcon, ServicesIcon, SettingsIcon } from "@/ui/svgs";
import Link from "next/link";
import { classNames } from "@/utils/Utils";


const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon , current: true },
  { name: 'Mentorships', href: '#', icon: MentorShipsIcon, current: false },
  { name: 'Application', href: '#', icon: ApplicationsIcon, current: false },
  { name: 'Services', href: '#', icon: ServicesIcon, current: false },
  { name: 'Settings', href: '#', icon: SettingsIcon, current: false },
]

export default function BottomSheet(){
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