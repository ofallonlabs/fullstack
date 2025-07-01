'use client';

import { useState } from "react";
import LinkWithState from '@/ui/components/common/link/new-service-link';

type NavTabItemType = {
    name: string;
    href: string;
    current: boolean;
}

export default function LinkTab({ navItems } : { navItems: NavTabItemType[] }) {
  const [ tabs ] = useState<NavTabItemType[]>(navItems);

  return (
    <header className="border-b border-brand-500">
      <nav className="flex overflow-x-auto py-4">
        <ul
          role="list"
          className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-600 "
        >
          {tabs.map((item) => (
            <li key={item.name}>

              <LinkWithState href={item.href} state={
                  {
                      title: { idle: item.name, pending: item.name },
                      style: {
                        idle: item.current ? 'text-brand-400' : '',
                        pending: item.current ? 'text-brand-400' : ''
                      }
                  }
              }/>

            </li>
          ))}
        </ul>
      </nav>
    </header>
    );

}