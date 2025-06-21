'use client';

import Link from "next/link";
import { useState } from "react";

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
              <Link href={item.href}
                className={item.current ? 'text-brand-400' : ''}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    );

}