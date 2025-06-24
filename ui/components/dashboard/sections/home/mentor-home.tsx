import NavTab from '@/ui/components/dashboard/tabs/nav-tab';
import TodoTableWrapper from "@/ui/components/dashboard/tables/mentor/wrappers/to-do-table-wrapper";
import StatisticsWrapper from "@/ui/components/dashboard/stats/mentor/wrappers/statistics-wrapper";


const tabNavs = [
  { name: 'Stats', href: '#stats', current: true },
  { name: 'To-do', href: '#todo', current: false },
]

export default function MentorHome({userFirstName, userId}:{userFirstName:string, userId: string}){

    return (
        <div className="relative space-y-10 mb-32">

            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Home"}</div>
                    </div> 
                </div>

                <NavTab navItems={tabNavs}/>

              </div> 

            <div className="flex flex-col gap-1 md:gap-2 text-left px-2 md:px-4">
                <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                    <div>{"Welcome back,"}</div>
                    <div>{userFirstName || ''}</div>
                </div>                
                <div className="text-gray-600 text-balance truncate font-light text-sm md:text-base lg:text-lg xl:text-xl text-left">
                    {"Track, manage and improve your mentoring experience."}
                </div>
            </div>

            <div id='stats' className="space-y-4">
                <StatisticsWrapper userId={userId} />             
            </div>

            <div id='todo' className="space-y-4"> 
                <div className="flex flex-col gap-1 md:gap-4 text-center px-2 md:px-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start lg:justify-center">
                        <div>{"Your to-do list"}</div> 
                    </div>                
                    <div className="text-gray-600 text-balance truncate font-light text-sm md:text-base lg:text-lg xl:text-xl text-left lg:text-center">
                        {"Check your to-do list. Remove barriers and make sure you're all set for success"}
                    </div>
                </div>  
                <div className="mt-8 mx-0 md:mx-4 lg:mx-6 xl:mx-8">
                    <TodoTableWrapper userId={userId} />
                </div> 

            </div>                    
         
        </div>
    );
}