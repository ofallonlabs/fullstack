'use client';

import { MenteeSkills } from "@/lib/db/services/mentee-background-service";
import Link from "next/link";

export default function SkillTable({skillsData}: {skillsData: Partial<MenteeSkills>[]}){

    return (
        skillsData.map((skill, idx) => (
            <tr key={`skill-${skill.name}-${idx}`}>

                <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                    {skill.name}
                    <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Skill Title</dt>
                        <dd className="mt-1 truncate text-xs  text-gray-900 w-fit py-0.5">{skill.rating}</dd>
                        <dt className="sr-only sm:hidden">Skill Rating</dt>
                    </dl>
                </td>
                <td className="hidden px-3 py-4 truncate text-xs lg:table-cell">
                    <div className=" text-sm text-gray-900 w-fit px-2 py-0.5">{skill.rating}</div>
                </td>
                <td className="min-w-[70px] py-4 pr-4 pl-3 text-right text-xs lg:text-sm font-medium sm:pr-4">
                    <Link href={`/dashboard/settings/information/skill/edit/${skill.id}`} className="text-brand-600 hover:text-brand-900">
                        Update<span className="sr-only"> skill, {skill.name}</span>
                    </Link>
                </td>   

            </tr>
        ))        
    );    

}