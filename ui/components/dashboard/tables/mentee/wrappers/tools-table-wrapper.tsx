import ToolTable from "@/ui/components/dashboard/tables/mentee/tools-table";
import { getMenteeBackground } from "@/lib/db/services/mentee-background-service";
import { MenteeTools } from "@/lib/db/services/mentee-background-service";
import { ToolsFormSchema } from "@/definition/dashboard/mentee/tools-schema";

export default async function ToolsTableWrappers({menteeId}: {menteeId: number}){

    let menteeBackground  = ((await getMenteeBackground(menteeId))?.tools) as Partial<MenteeTools> | undefined;

    const {success} = ToolsFormSchema.safeParse({
                name: menteeBackground?.name,
                rating: menteeBackground?.rating,
            });

    if(!success){
         menteeBackground = undefined;
    }

    return (
        <div className="">
            <div className="mb-2 text-sm font-bold">Tools</div>
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
                    <ToolTable toolsData={menteeBackground ? [menteeBackground] : []}/>
                </tbody>

            </table>
        </div>         
    );
}