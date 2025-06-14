import { JSX } from "react";
import { classNames } from "@/utils/Utils";
import Image from "next/image";
import ProfileNavItem from "@/ui/components/dashboard/profile-navitem";
import Link from "next/link";

export type TopHeaderNavigationType = {
    name: string;
    href: string;
    icon: ({ style }: {
        style?: string;
    }) => JSX.Element;
    current: boolean;
}

export default function DashboardTopHeader({navigation, navigationBottom}: {navigation: TopHeaderNavigationType[], navigationBottom: TopHeaderNavigationType[]}){
    return (
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
                        <Link
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
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li> 

                <li className="-mx-6 mt-auto overflow-hidden">

                  <ul role="list" className="-mx-2 space-y-1 p-6">
                    {navigationBottom.map((item) => (
                      <li key={item.name}>
                        <Link
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
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ProfileNavItem/>

                </li>
              </ul>
            </nav>
          </div>

        </div>        
    );
}