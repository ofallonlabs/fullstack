import JobExperienceForm from "@/ui/components/dashboard/tables/mentee/job-experience-table";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeJobExperience } from "@/lib/db/services/mentee-background-service";
import { JobExperienceFormSchema } from "@/definition/dashboard/mentee/job-experience-schema";

export default async function JobExperienceTableWrapper({menteeId}: {menteeId: number}){

    let menteeBackground  = ((await getMenteeBackground(menteeId))?.job) as Partial<MenteeJobExperience> | undefined;

    const {success} = JobExperienceFormSchema.safeParse({
                status: menteeBackground?.employementStatus,
                title: menteeBackground?.title,
                employer: menteeBackground?.employer
            });

    if(!success){
         menteeBackground = undefined;
    }

    return (
        <div className="mt-8">
            <table className="min-w-full divide-y divide-gray-300 border border-slate-200">

                <thead className="">
                    <tr>
                    <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">
                        Employment Status
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        Job Title
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                        Current Employer
                    </th>
                    </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-200 bg-white">
                    <JobExperienceForm jobExperienceData={menteeBackground ? [menteeBackground] : []}/>
                </tbody>

            </table>
        </div>     
    );    

}