import { MenteeEducationType } from "@/lib/db/services/mentee-background-service";

export default function EducationTable({educationData}: {educationData: Partial<MenteeEducationType>[]}){
    
    return (
            educationData.map((education, idx) => (
                <tr key={`education-${education.fieldOfStudy}-${idx}`}>
                    <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                    {education.highestEducationalLevel}
                    <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Highest Educational Level</dt>
                        <dd className="mt-1 truncate text-xs  text-gray-900 w-fit py-0.5">{education.fieldOfStudy}</dd>
                        <dt className="sr-only sm:hidden">Graduation Year</dt>
                        <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">{education.graduationYear}</dd>
                        <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">{education.graduationInstitute}</dd>
                    </dl>
                    </td>
                    <td className="hidden px-3 py-4 truncate text-xs lg:table-cell">
                        <div className=" text-sm text-gray-900 w-fit px-2 py-0.5">{education.fieldOfStudy}</div>
                    </td>
                    <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                        <div className="flex flex-col gap-1">
                    <div className="text-gray-900">{education.graduationYear}</div>
                        </div>
                    </td>
                    <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                        <div className="flex flex-col gap-1">
                    <div className=" text-sm text-gray-900 w-fit px-2 py-0.5">{education.graduationInstitute}</div>
                        </div>
                    </td>        
                </tr>
            ))   
    );    
}