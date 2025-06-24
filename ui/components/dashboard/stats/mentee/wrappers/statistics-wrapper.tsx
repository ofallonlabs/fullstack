import { getApplicationsForMentee } from "@/lib/db/services/application-service";
import { getMentee } from "@/lib/db/services/mentee-service";
import { getMentorshipForApplications } from "@/lib/db/services/mentorship-service";
import Statistics from "@/ui/components/dashboard/stats/mentor/statistics";

export default async function StatisticsWrapper({userId}:{userId: string}){

    const mentee = await getMentee(userId);
    if(!mentee) return null;

    const applications = await getApplicationsForMentee(mentee.id) || [];
    const applicationsIds = applications.map((application) => application.id);

    const mentorships = await getMentorshipForApplications(applicationsIds) || [];

    const services = applications.filter((application) => {
        return (application.status == "ACCEPTED") || (application.status == "DONE") || (application.status == "PENDING");
    });


    const statsData = [
        { name: 'Total Applications', value: `${applications.length}`, change: '+0%', changeType: 'positive' },
        { name: 'Total Services Booked', value: `${services.length}`, change: '+0%', changeType: 'positive' },
        { name: 'Total Mentorships', value: `${mentorships.length}`, change: '+0%', changeType: 'positive' },       
    ];


    return (
        <>
            <div className="flex flex-col gap-1 md:gap-4 text-center px-2 md:px-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start lg:justify-center">
                        <div>{"Your stats"}</div> 
                    </div>                
                    <div className="text-gray-600 text-balance truncate font-light text-sm md:text-base lg:text-lg xl:text-xl text-left lg:text-center">
                        {"Keep track of your progress on the platform and find ways to improve your stats"}
                    </div>
                </div>  

                <div>
                    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-3">
                        <Statistics stats={statsData}/>
                    </dl>                    
            </div>               
        </>
    );

}