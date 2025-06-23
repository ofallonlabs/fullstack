'use client';

import { MenteeTools } from "@/lib/db/services/mentee-background-service";
import Link from "next/link";

export default function ToolTable({toolsData}: {toolsData: Partial<MenteeTools>[]}){

    return (
        toolsData.map((tool, idx) => (
            <tr key={`tool-${tool.name}-${idx}`}>

                <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                    {tool.name}
                    <dl className="font-normal lg:hidden">
                        <dt className="sr-only">tool Title</dt>
                        <dd className="mt-1 truncate text-xs  text-gray-900 w-fit py-0.5">{tool.rating}</dd>
                        <dt className="sr-only sm:hidden">tool Rating</dt>
                    </dl>
                </td>
                <td className="hidden px-3 py-4 truncate text-xs lg:table-cell">
                    <div className=" text-sm text-gray-900 w-fit px-2 py-0.5">{tool.rating}</div>
                </td>
                <td className="min-w-[70px] py-4 pr-4 pl-3 text-right text-xs lg:text-sm font-medium sm:pr-4">
                    <Link href={`/dashboard/settings/information/tool/edit/${tool.id}`} className="text-brand-600 hover:text-brand-900">
                        Update<span className="sr-only"> tool, {tool.name}</span>
                    </Link>
                </td>   

            </tr>
        ))        
    );    

}