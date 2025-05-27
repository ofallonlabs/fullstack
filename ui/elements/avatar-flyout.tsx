import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


const userNavigation = [
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
 
export default function AvatarFlayout() {
  return (
   <Menu as="div" className="relative ml-3">
        <div>
            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-brand-600 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 focus:outline-hidden">
                <Image className="object-center object-contain w-[24px] aspect-square rounded-full" alt="" src={"/assets/images/about/avatar1.jpg"} width={24} height={24}/>
                <span className="absolute right-0 bottom-0 block size-1.5 rounded-full bg-brand-400 ring-2 ring-white" /> 
            </MenuButton>
        </div>
        <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            {userNavigation.map((item) => (
                <MenuItem key={item.name}>
                    <a href={item.href}  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">{item.name}</a>
                </MenuItem>
            ))}
        </MenuItems>
    </Menu>
  )
}
