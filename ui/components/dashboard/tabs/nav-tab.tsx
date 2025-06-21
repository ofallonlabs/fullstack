'use client';

import { useState } from "react";

type NavTabItemType = {
    name: string;
    href: string;
    current: boolean;
}

export default function NavTab({ navItems } : { navItems: NavTabItemType[] }) {
  const [tabs, updateTabs] = useState<NavTabItemType[]>(navItems);

  return (
    <header className="border-b border-brand-500">
      <nav className="flex overflow-x-auto py-4">
        <ul
          role="list"
          className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-600 "
        >
        {
          tabs.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                onClick={()=>{
                  updateTabs((cur) => {
                      return cur.map((tb)=>{
                        if(item.href == tb.href) return {...tb, current:true}
                        else return {...tb, current:false};
                      });
                  })
                }} 
                className={item.current ? 'text-brand-400' : ''}>
                {item.name}
              </a>
            </li>
            ))
          }
        </ul>
      </nav>
    </header>  
    );

}