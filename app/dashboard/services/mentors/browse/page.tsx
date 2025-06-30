import { auth } from '@/lib/auth/auth';
import { headers } from 'next/headers';
import LinkTab from '@/ui/components/dashboard/tabs/link-tab';
import { getAllMentors } from "@/lib/db/services/mentor-service";
import { getMentorServices } from "@/lib/db/services/mentor-services-service";
import { printError } from "@/utils/Utils";
import type { MentorCardData } from "@/definition/public/data-types";
import MentorProfileCard from '@/ui/components/common/cards/mentor-profile-card';

export default async function AllMentors(){
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return <div>Not authenticated</div>;
  }

  const user = session.user;
  if(!user) return null;

  const tabNavs = [
    { name: 'All Services', href: '/dashboard/services/browse', current: false },
    { name: 'All Mentors', href: '/dashboard/services/mentors/browse', current: true },  
  ]

  if(user.role == "MENTOR"){
    tabNavs.unshift({ name: 'My Services', href: '/dashboard/services', current: false });
  }

  const mentors = await getAllMentors() || [];
  let  allMentorsData : MentorCardData[] = [];

  try {

      allMentorsData =  await Promise.all(mentors.map(async (mentor)=>{
          const services = await getMentorServices(mentor.id) || [];

          const minServicePrice = services.reduce((acc, cur) => {
              if(Number(cur.price) < acc) return Number(cur.price);
              return acc;
          }, 0);

          return {
              avatar: mentor.user.image || "#",
              link: `/profile/${mentor.id}/${mentor.user.name}`,
              country: mentor.user.country || 'USA',
              language: 'English',
              reviews: 10,
              avgratings: 4,
              mentorname: mentor.user.name,
              mentortagline: mentor.tagline || '',
              mentorid: mentor.id,
              servicescount: `${services.length}`,
              serviceminprice: `${minServicePrice}`,             
          }

        }));
 
    }catch (e : unknown){
        printError("BrowseAllMentors - allMentorsData", e);
    }



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

                      <div className="mx-auto 2xl:w-11/12 lg:px-8 md:px-6 px-2">

                          <div className="w-full md:w-11/12 xl:w-10/12 text-center mx-auto">

                              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-4 xl:gap-6 2xl:gap-8">
                                {
                                    allMentorsData.map((mentorItem, idx)=>{
                                        return(
                                            <MentorProfileCard key={`serviceItem-${idx}-card`} mentor={mentorItem}/>                                  
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