import { JSX } from "react";
import { classNames } from "@/utils/Utils";
import Image from "next/image";
import Link from "next/link";
import TabLinkLoadingIndicator from "@/ui/components/common/link/tab-link-loading-indicator";

export type SideBarNavigationType = {
    name: string;
    href: string;
    icon: ({ style }: {
        style?: string;
    }) => JSX.Element;
    current: boolean;
}

export default function SideNavbar({children, navigation, navigationBottom}: {children: React.ReactNode, navigation: SideBarNavigationType[], navigationBottom: SideBarNavigationType[]}){
    return (
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
                            <Link
                              prefetch={false}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-brand-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600',
                                'group flex flex-row items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                style={classNames(
                                  item.current ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                              <TabLinkLoadingIndicator/>                              
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
                            'group flex flex-row items-center gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon style={classNames(
                              item.current ? 'text-brand-600' : 'text-gray-400 group-hover:text-brand-600',
                              'size-6 shrink-0',
                            )}/>
                          
                          {item.name}
                          <TabLinkLoadingIndicator/>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {children}

                </li>
                  </ul>
                </nav>
              </div>

    );
}