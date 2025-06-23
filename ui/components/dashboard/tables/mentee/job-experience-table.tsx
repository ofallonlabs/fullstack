import { MenteeJobExperience } from "@/lib/db/services/mentee-background-service";

export default function JobExperienceTable({jobExperienceData}: {jobExperienceData: Partial<MenteeJobExperience>[]}){
    
    return (
        jobExperienceData.map((experience, idx) => (
            <tr key={`experience-${experience.title}-${idx}`}>
                <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                {experience.employementStatus ? "Employed" : "Unemployed"}
                <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Employment Status</dt>
                    <dd className="mt-1 truncate text-xs  text-gray-900 w-fit py-0.5">{experience.title}</dd>
                    <dt className="sr-only sm:hidden">Job Title</dt>
                    <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">{experience.employer}</dd>
                </dl>
                </td>
                <td className="hidden px-3 py-4 truncate text-xs lg:table-cell">
                    <div className=" text-sm text-gray-900 w-fit px-2 py-0.5">{experience.title}</div>
                </td>
                <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                    <div className="flex flex-col gap-1">
                        <div className="text-gray-900">{experience.employer}</div>
                    </div>
                </td>              
            </tr>
        ))   
    );    
}