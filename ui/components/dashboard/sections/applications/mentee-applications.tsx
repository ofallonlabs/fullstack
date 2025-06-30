import { getApplicationsForMentee } from "@/lib/db/services/application-service";
import { getMentee } from "@/lib/db/services/mentee-service";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import NavTab from '@/ui/components/dashboard/tabs/nav-tab';
import type { ApplicationReviewType } from "@/definition/public/data-types";

const tabNavs = [
  { name: 'New', href: '#new', current: true },
  { name: 'Archive', href: '#archive', current: false },
]

export default async function MenteeApplications({userId} : {userId:string}){

    const mentee = await getMentee(userId);
    if(!mentee) return null;

    const applications = await getApplicationsForMentee(mentee.id) || [];

    const applicationTableRowsData : ApplicationReviewType[] = applications.map(( application )=> {

        return {
            id: application.id,
            serviceTitle: application.mentorService.title,
            serviceId: application.mentorService.id,
            menteeName: application.mentee.user.name,
            menteeId: application.menteeId,
            mentorName: application.mentorService.mentor.user.name,
            status: application.status,
            requestNote: application.requestNote,
            responseMessage: application.responseMessage,
            approvedAt: application.approvedAt,
            archived: application.archived,
            archivedAt: application.archivedAt,
            createdAt: application.createdAt,
            updatedAt: application.updatedAt
        };

    })


    return (
        <div className="relative space-y-10 mb-32">

            <div className="sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="flex h-12 shrink-0 items-center border-b border-brand-600/5 bg-white text-gray-800 px-4 shadow-xs sm:px-4">
                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form action="#" className="grid flex-1 grid-cols-1">
                            <input
                            name="search"
                            type="search"
                            placeholder="Search Applications"
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

              <div className="flex flex-col gap-4">
                {
                    applicationTableRowsData.map((app, idx) => {
                        return <div id={`${app.id}-${app.menteeName}-${app.serviceId}-${idx}`}>
                            {JSON.stringify(app, null, 2)}
                        </div>
                    })
                }
              </div>
         
        </div>
    );    
    
}