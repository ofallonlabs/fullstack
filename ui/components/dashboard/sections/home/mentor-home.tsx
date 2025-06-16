"use client";

import { useState } from 'react';
import { classNames } from "@/utils/Utils";

const stats = [
    { name: 'Total Applications', value: '0', change: '+0%', changeType: 'positive' },
    { name: 'Total Sessions Booked', value: '0', change: '+0%', changeType: 'positive' },
    { name: 'Total Mentors', value: '0', change: '+0%', changeType: 'positive' }
]

const todos = [
  { action: 'Complete Your Profile', status: 'INCOMPLETE', description: 'Complete your profile to increase visibility', subdescription: 'Mentees prefer mentors with detailed profiles' , link: '#' },
  { action: 'Connect Stripe', status: 'INCOMPLETE', description: 'Connect your Stripe account to receive payments', subdescription: 'Secure payment processing for your services' , link: '#' },
  { action: 'Connect Calendly', status: 'INCOMPLETE', description: 'Connect your Calendly to schedule sessions', subdescription: 'Allow mentees to book time on your calendar' , link: '#' },
  { action: 'Craete At Least One Service', status: 'INCOMPLETE', description: 'Create your first montoring service', subdescription: 'Define what you offer and set your rates' , link: '#' },
  { action: 'Review Applications', status: 'INCOMPLETE', description: 'Manage received applications form mentee', subdescription: 'Do not let new applicants hang for too long' , link: '#' },
  { action: 'Review Mentorships', status: 'INCOMPLETE', description: 'Manage your current mentorships', subdescription: 'Do not let mentees requests hang for too long' , link: '#' },
]

const tabNavs = [
  { name: 'Stats', href: '#stats', current: true },
  { name: 'To-do', href: '#todo', current: false },
]



export default function MentorHome({userFirstName}:{userFirstName:string}){
  const [tabs, updateTabs] = useState(tabNavs);

    return (
        <div className="relative space-y-10 mb-32">

            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Home"}</div>
                    </div> 
                </div>

                <header className="border-b border-brand-500">
                  <nav className="flex overflow-x-auto py-4">
                    <ul
                      role="list"
                      className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-600 "
                    >
                      {tabs.map((item) => (
                        <li key={item.name}>
                          <a href={item.href}
                            onClick={()=>{
                                updateTabs((cur) => {
                                    return cur.map((tb)=>{
                                      if(item.href == tb.href) return {...tb, current:true}
                                      else return {...tb, current:false};
                                    });
                                })
                            }} 
                           className={item.current ? 'text-brand-400' : ''}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </header>

              </div> 

            <div className="flex flex-col gap-1 md:gap-2 text-left px-2 md:px-4">
                <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                    <div>{"Welcome back,"}</div>
                    <div>{userFirstName || ''}</div>
                </div>                
                <div className="text-gray-600 text-balance truncate font-light text-sm md:text-base lg:text-lg xl:text-xl text-left">
                    {"Track, manage and improve your mentoring experience."}
                </div>
            </div>

            <div id='stats' className="space-y-4">
                <div className="flex flex-col gap-1 md:gap-4 text-center px-2 md:px-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start lg:justify-center">
                        <div>{"Your stats"}</div> 
                    </div>                
                    <div className="text-gray-600 text-balance truncate font-light text-sm md:text-base lg:text-lg xl:text-xl text-left lg:text-center">
                        {"Keep track of your progress on the platform and find ways to improve your stats"}
                    </div>
                </div>  

                <div>
                    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                        key={stat.name}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
                        >
                        <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
                        <dd
                            className={classNames(
                            stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                            'text-xs font-medium',
                            )}
                        >
                            {stat.change}
                        </dd>
                        <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{stat.value}</dd>
                        </div>
                    ))}
                    </dl>                    
                </div>             
            </div>

            <div id='todo' className="space-y-4"> 
                <div className="flex flex-col gap-1 md:gap-4 text-center px-2 md:px-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start lg:justify-center">
                        <div>{"Your to-do list"}</div> 
                    </div>                
                    <div className="text-gray-600 text-balance truncate font-light text-sm md:text-base lg:text-lg xl:text-xl text-left lg:text-center">
                        {"Check your to-do list. Remove barriers and make sure you're all set for success"}
                    </div>
                </div>  
                <div className="mt-8 mx-0 md:mx-4 lg:mx-6 xl:mx-8">
                    <table className="min-w-full divide-y divide-gray-300 border border-slate-200">

                        <thead className="">
                            <tr>
                            <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">
                                Action Items
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                            >
                                Description
                            </th>
                            <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {todos.map((todo) => (
                            <tr key={todo.action}>
                                <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                                {todo.action}
                                <dl className="font-normal lg:hidden">
                                    <dt className="sr-only">Action</dt>
                                    <dd className="mt-1 truncate text-xs  bg-red-200 rounded text-red-600 w-fit px-2 py-0.5">{todo.status}</dd>
                                    <dt className="sr-only sm:hidden">Description</dt>
                                    <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">{todo.description}</dd>
                                </dl>
                                </td>
                                <td className="hidden px-3 py-4 truncate text-xs lg:table-cell">
                                    <div className="bg-red-200 text-xs rounded text-red-600 w-fit px-2 py-0.5">{todo.status}</div>
                                </td>
                                <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                                    <div className="flex flex-col gap-1">
                                        <div className="text-gray-900">{todo.description}</div>
                                        <div className="text-gray-500 text-sm">{todo.subdescription}</div>
                                    </div>
                                </td>
                                <td className="min-w-[70px] py-4 pr-4 pl-3 text-right text-xs lg:text-sm font-medium sm:pr-4">
                                    <a href="#" className="text-brand-600 hover:text-brand-900">
                                        Fix it<span className="sr-only">, {todo.action}</span>
                                    </a>
                                </td>
                            </tr>
                            ))}
                        </tbody>

                    </table>
                </div> 

            </div>                    
         
        </div>
    );
}