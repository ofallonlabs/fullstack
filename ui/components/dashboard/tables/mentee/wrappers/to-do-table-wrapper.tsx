import { getApplicationsForMentee } from "@/lib/db/services/application-service";
import { getMentee } from "@/lib/db/services/mentee-service";
import MenteeTodoTable from "@/ui/components/dashboard/tables/mentee/to-do-table";
import type { TodoType } from "@/definition/dashboard/common/common-types";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { getMenteeGoals } from "@/lib/db/services/mentee-goal-service";


export default async function TodoTableWrapper({ userId } : {userId: string}){

    const mentee = await getMentee(userId);
    if(!mentee) return null;

    const menteeBackground = await getMenteeBackground(mentee.id);

    const menteeGoals = await getMenteeGoals(mentee.id) || [];

    const menteeApplication = await getApplicationsForMentee(mentee.id) || [];

    
    const isProfileCompleted = !!(menteeBackground && menteeBackground.education && menteeBackground.job && menteeBackground.skills && menteeBackground.tools);
    const hasGoals = menteeGoals.length > 0;

    const hasActiveMentorship = menteeApplication.some((application) => {
        return !application.archived && (application.status == "ACCEPTED" || application.status == "PENDING");
    });


    const todoList : TodoType[] = [];

    if(!isProfileCompleted) 
        todoList.push({ id: "profile", action: 'Complete Your Profile', status: 'INCOMPLETE', description: 'Complete your profile to attract mentors', subdescription: 'A detailed profile helps mentors understand your needs' , link: '/dashboard/settings#education' });

    if(!hasGoals)
        todoList.push({ id: "goal", action: 'Setup Goals', status: 'INCOMPLETE', description: 'Connect your Stripe account to receive payments', subdescription: 'Only your mentors will be able to see your goals' , link: '/dashboard/settings#goals' });

    if(!hasActiveMentorship)
        todoList.push({ id: "mentorship" ,action: 'Apply To Mentors', status: 'INCOMPLETE', description: 'Sign up to a service', subdescription: 'Send applications to start your mentorship journey' , link: '/dashboard/services/browse' });


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
                <MenteeTodoTable todos={todoList}/>
            </tbody>

        </table>        
    );
}