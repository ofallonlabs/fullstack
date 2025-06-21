import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import NavTab from '@/ui/components/dashboard/tabs/nav-tab';


const tabNavs = [
  { name: 'New', href: '#new', current: true },
  { name: 'Archive', href: '#archive', current: false },
]


export default function Mentorships(){



    return (
        <div className="relative space-y-10 mb-32">

            <div className="sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="flex h-12 shrink-0 items-center border-b border-brand-600/5 bg-white text-gray-800 px-4 shadow-xs sm:px-4">
                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form action="#" className="grid flex-1 grid-cols-1">
                            <input
                            name="search"
                            type="search"
                            placeholder="Search Mentorships"
                            aria-label="Search"
                            className="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-hidden placeholder:text-gray-500 sm:text-sm/6"
                            />
                            <MagnifyingGlassIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-500"
                            />
                        </form>
                    </div>
                </div>

                <NavTab navItems={tabNavs}/>

              </div> 

              <div>
                Mentorships
              </div>
         
        </div>
    );
}