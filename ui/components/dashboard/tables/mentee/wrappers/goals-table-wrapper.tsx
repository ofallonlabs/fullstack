import { getMenteeGoals } from "@/lib/db/services/mentee-goal-service";
import { GoalDataType } from "@/definition/dashboard/mentee/goal-schema";
import GoalsTable from '@/ui/components/dashboard/tables/mentee/goals-table';

export default async function GoalsTableWrapper({ menteeId }: {menteeId: number}){

    const menteeGoals : GoalDataType[] = (await getMenteeGoals(menteeId))?.map((goal)=>{
        return {
        id: goal.id,
        title: goal.title,
        description: goal.description || "",
        exr: goal.expectations || "",
        ext: goal.expectedTimeline || "",
        exmwmpm: goal.meetingFrequency,
        mattwot: goal.focusHpw
        }
    }) || [];

    return (
        <div className="mt-8">
            <table className="min-w-full divide-y divide-gray-300 border border-slate-200">

                <thead className="">
                    <tr>
                    <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">
                        Title
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        Description
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                        Expected Results
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                        Details
                    </th> 
                      <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                <span className="sr-only">Edit</span>
                      </th>                                                
                    </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-200 bg-white">

                    <GoalsTable goalsData={menteeGoals}/>

                </tbody>

            </table>
        </div> 

    )  
    
}