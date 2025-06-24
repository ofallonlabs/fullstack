import SkillTable from "@/ui/components/dashboard/tables/mentee/skills-table";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeSkills } from "@/lib/db/services/mentee-background-service";
import { SkillsFormSchema } from "@/definition/dashboard/mentee/skills-schema";

export default async function SkillsTableWrappers({menteeId}: {menteeId: number}){

    let menteeBackground  = ((await getMenteeBackground(menteeId))?.skills) as Partial<MenteeSkills[]> | undefined;
    let skills : MenteeSkills[] = [];

    if(menteeBackground != undefined && menteeBackground?.length > 0){

        skills = menteeBackground?.filter((skill) => {

                const {success} = SkillsFormSchema.safeParse({
                    name: skill?.name,
                    rating: skill?.rating,
                });

                return success;

        }).filter((skill) => skill != undefined)

    }



    return (
        <div className="">
            <div className="mb-2 text-sm font-bold">Skills</div>
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
                        Rating
                    </th>
                    <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                        <span className="sr-only">Edit</span>
                    </th>
                    </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-200 bg-white">
                    <SkillTable skillsData={skills}/>
                </tbody>

            </table>
        </div>         
    );
}