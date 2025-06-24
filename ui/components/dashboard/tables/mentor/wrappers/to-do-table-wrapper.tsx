import { getApplicationsForMentor } from "@/lib/db/services/application-service";
import { getMentor } from "@/lib/db/services/mentor-service";
import { getMentorServices } from "@/lib/db/services/mentor-services-service";
import { getMentorshipForApplications } from "@/lib/db/services/mentorship-service";
import MentorTodoTable from "@/ui/components/dashboard/tables/mentor/to-do-table";
import type { TodoType } from "@/definition/dashboard/common/common-types";


export default async function TodoTableWrapper({ userId } : {userId: string}){

    const mentor = await getMentor(userId);
    if(!mentor) return null;

    const mentorSerives = await getMentorServices(mentor.id) || [];
    const requiredApproval = mentorSerives.filter((service)=>{
        return !service.isArchived && service.needApproval;
    }).map((service) => service.id);
    
    const mentorApplications = await getApplicationsForMentor(mentor.id) || [];

    const mentorMentorships = await getMentorshipForApplications(mentorApplications.map((application) => application.id)) || [];
    
    const isProfileCompleted = !!(mentor.tagline && mentor.aboutMe);
    const isStripeVerified = mentor.verifiedStrip;
    const isCalendlyVerified = mentor.verifiedCalendly;
    const hasAService = mentorSerives.length > 0;
    const hasPendingApplication = mentorApplications.some((application) => {
        return requiredApproval.includes(application.serviceId);
    });
    const hasPendingMentorships = mentorMentorships.some((mentorship) => {
        return !mentorship.archived && (mentorship.status == "BOOKED" || mentorship.status == "PAID");
    })


    const todoList : TodoType[] = [];

    if(!isProfileCompleted) 
        todoList.push({ id:'profile', action: 'Complete Your Profile', status: 'INCOMPLETE', description: 'Complete your profile to increase visibility', subdescription: 'Mentees prefer mentors with detailed profiles' , link: '/dashboard/settings#profile' });

    if(!isStripeVerified)
        todoList.push({ id:'stripe', action: 'Connect Stripe', status: 'INCOMPLETE', description: 'Connect your Stripe account to receive payments', subdescription: 'Secure payment processing for your services' , link: '/dashboard/settings#payment' });

    if(!isCalendlyVerified)
        todoList.push({ id:'calendly', action: 'Connect Calendly', status: 'INCOMPLETE', description: 'Connect your Calendly to schedule sessions', subdescription: 'Allow mentees to book time on your calendar' , link: '/dashboard/settings#booking' });

    if(!hasAService)
        todoList.push({ id:'service', action: 'Craete At Least One Service', status: 'INCOMPLETE', description: 'Create your first montoring service', subdescription: 'Define what you offer and set your rates' , link: '/dashboard/services/new' });

    if(hasPendingApplication)
        todoList.push({ id:'application', action: 'Review Applications', status: 'INCOMPLETE', description: 'Manage received applications form mentee', subdescription: 'Do not let new applicants hang for too long' , link: '/dashboard/applications' });

    if(hasPendingMentorships)
        todoList.push({ id:'mentorship', action: 'Review Mentorships', status: 'INCOMPLETE', description: 'Manage your current mentorships', subdescription: 'Do not let mentees requests hang for too long' , link: '/dashboard/mentorships' });




    return (
        <table className="min-w-full divide-y divide-gray-300 border border-slate-200">

            <thead className="">
                <tr>
                <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">
                    Action Items
                </th>
                <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                    Status
                </th>
                <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                    Description
                </th>
                <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                    <span className="sr-only">Edit</span>
                </th>
                </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-200 bg-white">
                <MentorTodoTable todos={todoList}/>
            </tbody>

        </table>        
    );
}