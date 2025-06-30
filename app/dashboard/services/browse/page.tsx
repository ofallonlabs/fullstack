import { auth } from '@/lib/auth/auth';
import { headers } from 'next/headers';
import LinkTab from '@/ui/components/dashboard/tabs/link-tab';
import type { ServiceCardData } from "@/definition/public/data-types";
import ServiceCard from "@/ui/components/common/cards/service-card";
import { getAllServices } from "@/lib/db/services/mentor-services-service";

export default async function AllServices(){
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  const user = session.user;
  if(!user) return null;

  const tabNavs = [
    { name: 'All Services', href: '/dashboard/services/browse', current: true },
    { name: 'All Mentors', href: '/dashboard/services/mentors/browse', current: false },  
  ]

  if(user.role == "MENTOR"){
    tabNavs.unshift({ name: 'My Services', href: '/dashboard/services', current: false });
    tabNavs.unshift({ name: 'Create new service', href: '/dashboard/services/new', current: false });
  }

  const allServices : ServiceCardData[] = (await getAllServices() || []).map((service)=>{

        return {
            title: service.title,
            description: service.description || '',
            country: service.mentor.user.country || 'USA',
            language: 'English',
            link: `/dashboard/services/details/${service.id}`,
            avgratings: 4,
            reviews: 10,
            mentorid: service.mentor.id,
            mentorname: service.mentor.user.name,
            price: `${service.price}`
        }

  });

    return (
        <div className="relative space-y-10 mb-32">

            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Services"}</div>
                    </div> 
                </div>

                <LinkTab navItems={tabNavs} />

              </div> 

              <div className="min-h-[500px]">

                      <div className="mx-auto lg:px-8 md:px-6 px-2">

                          <div className="w-full text-center mx-auto">

                              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-4 xl:gap-6 2xl:gap-8">

                                      {
                                          allServices.map((serviceItem, idx)=>{
                                              return(    
                                                  <ServiceCard key={`serviceItem-${idx}-card`} service={serviceItem} />                              
                                              );
                                          })
                                      }
                              </div>

                          </div>
                    
                      </div>        

              </div>        
        </div>
    );
}