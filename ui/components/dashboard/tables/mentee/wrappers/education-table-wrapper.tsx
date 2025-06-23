import EducationTable from "@/ui/components/dashboard/tables/mentee/education-teble";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeEducationType } from "@/lib/db/services/mentee-background-service";
import { MenteeEducationFormSchema } from "@/definition/dashboard/mentee/education-schema";

export default async function EducationTableWrapper({menteeId}: {menteeId: number}){

     let menteeBackground  = ((await getMenteeBackground(menteeId))?.education) as Partial<MenteeEducationType> | undefined;

     const {success} = MenteeEducationFormSchema.safeParse({
             hdl: menteeBackground?.highestEducationalLevel,
             fos: menteeBackground?.fieldOfStudy,
             gradyear: menteeBackground?.graduationYear,
             gradinstitute: menteeBackground?.graduationInstitute,
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
                        Highest Educational Level
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        Field of Study
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                        Graduation Year
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                        Graduation Institute
                    </th>
                    </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-200 bg-white">
                    <EducationTable educationData={menteeBackground ? [menteeBackground] : []}/>
                </tbody>

            </table>
        </div> 

    );

}