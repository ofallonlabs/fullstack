import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { BellIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { ChartPieIcon } from '@heroicons/react/24/outline';

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Analytics 2', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon }
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon }
]


export default async function NotificationFlyout() {

  return (
    <Popover className="relative">
      <PopoverButton className="flex flex-row items-center justify-center">
        <div className="text-brand-300 hover:cursor-pointer">
          <BellIcon aria-hidden="true" className="size-7" />
        </div>
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute right-2 z-10 mt-1 flex transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-[300px] flex-auto overflow-hidden rounded-md bg-white text-sm/6 shadow-lg p-1.5 ring-1 ring-gray-900/5">
          <div className="">
            {solutions.map((item) => (
              <div key={item.name} className="w-fit group relative flex gap-x-4 rounded-lg p-1 hover:bg-gray-50">
                <div className="flex size-9 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                 </div>
                <div>
                  <a href={item.href} className="font-normal text-gray-900 text-sm line-clamp-1">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className=" text-gray-600 text-xs line-clamp-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 line-clamp-1"
              >
                <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                  {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
