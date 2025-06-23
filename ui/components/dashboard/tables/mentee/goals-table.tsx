'use client';

import { GoalDataType } from "@/definition/dashboard/mentee/goal-schema";
import Link from "next/link";

export default function GoalsTable({goalsData} : {goalsData: GoalDataType[]}){

    return (
        goalsData?.map((goal, idx) => (
                    <tr key={`goal-${goal.title}-${idx}`}>
                        <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                        {goal.title}
                        <dl className="font-normal lg:hidden">
                  <dt className="sr-only">Goal Description</dt>
                  <dd className="mt-1 truncate text-xs  text-gray-900 w-fit py-0.5">{goal.description}</dd>
                  <dt className="sr-only sm:hidden">Expected time</dt>
                  <dd className="mt-1 truncate text-xs text-gray-900 sm:hidden">{goal.exr}</dd>
                  <dt className="sr-only sm:hidden">Details</dt>
                  <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">
                    <div className=" text-xs text-gray-900 w-fit  py-0.5">{"Timeline: "}{goal.ext}</div>
                    <div className=" text-xs text-gray-900 w-fit  py-0.5">{"Meetings/Month: "}{goal.exmwmpm}</div>
                    <div className=" text-xs text-gray-900 w-fit  py-0.5">{"Availability/Week(Hours): "}{goal.mattwot}</div>                 
                  </dd>                  
                  <dt className="sr-only sm:hidden">Edit</dt>
                  <dd className="mt-3 truncate text-xs text-gray-500 sm:hidden">
                    <Link href={`/dashboard/settings/information/goal/edit/${goal.id}`} className="text-brand-600 hover:text-brand-900">
                        Update<span className="sr-only"> goal, {goal.title}</span>
                    </Link>                    
                  </dd>                  
                        </dl>
                        </td>
                        <td className="hidden px-3 py-4 truncate text-sm text-gray-500 lg:table-cell">
                  <div className="flex flex-col gap-1">
                      <div className="text-gray-900">{goal.description}</div>
                  </div>
                        </td>                        

                        <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                  <div className="flex flex-col gap-1">
                      <div className="text-gray-900">{goal.exr}</div>
                  </div>
                        </td> 
                        <td className="hidden px-3 py-4 truncate text-xs sm:table-cell space-y-1.5 text-balance">
                  <div className=" text-sm text-gray-900 w-fit  py-0.5">{"Timeline: "}{goal.ext}</div>
                  <div className=" text-sm text-gray-900 w-fit  py-0.5">{"Meetings/Month: "}{goal.exmwmpm}</div>
                  <div className=" text-sm text-gray-900 w-fit  py-0.5">{"Availability/Week(Hours): "}{goal.mattwot}</div>
                        </td>                        
                        <td className="min-w-[70px] hidden sm:table-cell py-4 pr-4 pl-3 text-right text-xs lg:text-sm font-medium sm:pr-4">
                    <Link href={`/dashboard/settings/information/goal/edit/${goal.id}`} className="text-brand-600 hover:text-brand-900">
                        Update<span className="sr-only"> goal, {goal.title}</span>
                    </Link>
                        </td>                                    
                    </tr>
                    ))

    )  
    
}