'use client'

import { useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const secondaryNavigation = [
  { name: 'Personal Information', href: '#personalinformation', current: true },
  { name: 'Profile', href: '#profile', current: false },
  { name: 'Education', href: '#education', current: false },
  { name: 'Job Experience', href: '#jobexperience', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Goals', href: '#goals', current: false },  
  { name: 'Security', href: '#security', current: false },   
]

const educations = [
  { HDL: 'Bsc', FOS: 'Information of Technology', GRADYEAR: '2015', GRADINSTITUDE: 'Shiraz State University'},
]

const jobExperience = [
  { status: 'Employed', title: 'Software developer', employer: 'OMentors'},
]

const skills = [
  { title: 'Skill #1', rating: '5'},
]

const tools = [
  { title: 'Tool #1', rating: '5'},
]


const goals = [
  {
    title:  'GTitle',
    description: 'GDescription',
    exr: 'GExptected Result',
    details:{
      extl: 'GExpected Timeline',
      exmwmpm: '12',
      mattwot: '2'
    }
  }
]


export default function MenteeSettings() {
  const [tabs, updateTabs] = useState(secondaryNavigation);
  const pathName = usePathname();

  useEffect(()=>{
    
    updateTabs((cur) => {
      return cur.map((navItem)=>{
        return {...navItem, current: pathName.toLowerCase().includes(navItem.href.toLowerCase())}
      })
    }) 

  },[pathName, updateTabs])  

  return (
    <>
      <div className="">
        <div className="">
          <main>

            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Settings"}</div>
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
                          <a 
                            href={item.href} 
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


            <div className="divide-y divide-white/5">

              <div id="personalinformation" className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base/7 font-semibold text-black">Personal Information</h2>
                  <p className="mt-1 text-sm/6 text-gray-600">Update your photo and personal details.</p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full flex items-center gap-x-8">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-24 flex-none rounded-lg bg-gray-800 object-cover"
                      />
                      <div>
                        <button
                          type="button"
                          className="rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-black/20"
                        >
                          Change avatar
                        </button>
                        <p className="mt-2 text-xs/5 text-gray-600">JPG, GIF or PNG. 1MB max.</p>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm/6 font-medium text-black">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm/6 font-medium text-black">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>
 
                  </div>

                  <div className="mt-8 flex">
                    <button
                      type="submit"
                      className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              <div id="profile" className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base/7 font-semibold text-black">Profile</h2>
                  <p className="mt-1 text-sm/6 text-gray-600">Update your portfolio and bio.</p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">

                    <div className="sm:col-span-6">
                      <label htmlFor="website" className="block text-sm/6 font-medium text-black">
                        Website
                      </label>
                      <div className="mt-2">
                        <input
                          id="website"
                          name="website"
                          type="text"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="tagline" className="block text-sm/6 font-medium text-black">
                        Tagline
                      </label>
                      <div className="mt-2">
                        <input
                          id="tagline"
                          name="tagline"
                          type="text"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="currentjob" className="block text-sm/6 font-medium text-black">
                        Current Job Title
                      </label>
                      <div className="mt-2">
                        <input
                          id="currentjob"
                          name="currentjob"
                          type="text"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>


                    <div className="sm:col-span-6">
                      <label htmlFor="bio" className="block text-sm/6 font-medium text-black">
                        Bio
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="bio"
                          name="bio"
                          rows={4}
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>


                    <div className="col-span-full">
                      <label htmlFor="country" className="block text-sm/6 font-medium text-black">
                        Country
                      </label>
                      <div className="mt-2 grid grid-cols-1">
                        <select
                          id="country"
                          name="country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-black/5 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-white/10 *:bg-gray-100 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        >
                          <option>USA</option>
                          <option>Canada</option>
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-600 sm:size-4"
                        />
                      </div>
                    </div>

                  </div>

                  <div className="mt-8 flex">
                    <button
                      type="submit"
                      className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              <div className="w-full bg-slate-100 divide-y divide-y-2 divide-slate-200">

                <div id="education"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Education</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Update your education history.</p>                        
                      </div>
                      <div>
                        <Link href="#" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Update</Link>
                      </div>
                  </div>

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
                                  Graduation Institude
                              </th>
                              </tr>
                          </thead>
                          
                          <tbody className="divide-y divide-gray-200 bg-white">
                              {educations.map((education, idx) => (
                              <tr key={`education-${education.FOS}-${idx}`}>
                                  <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                                  {education.HDL}
                                  <dl className="font-normal lg:hidden">
                                      <dt className="sr-only">Highest Educational Level</dt>
                                      <dd className="mt-1 truncate text-xs  text-gray-900 w-fit py-0.5">{education.FOS}</dd>
                                      <dt className="sr-only sm:hidden">Graduation Year</dt>
                                      <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">{education.GRADYEAR}</dd>
                                      <dd className="mt-1 truncate text-xs text-gray-500 sm:hidden">{education.GRADINSTITUDE}</dd>
                                  </dl>
                                  </td>
                                  <td className="hidden px-3 py-4 truncate text-xs lg:table-cell">
                                      <div className=" text-sm text-gray-900 w-fit px-2 py-0.5">{education.FOS}</div>
                                  </td>
                                  <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                                      <div className="flex flex-col gap-1">
                                          <div className="text-gray-900">{education.GRADYEAR}</div>
                                      </div>
                                  </td>
                                  <td className="hidden px-3 py-4 truncate text-sm text-gray-500 sm:table-cell">
                                      <div className="flex flex-col gap-1">
                                           <div className=" text-sm text-gray-900 w-fit px-2 py-0.5">{education.GRADINSTITUDE}</div>
                                      </div>
                                  </td>                                  
                              </tr>
                              ))}
                          </tbody>

                      </table>
                  </div> 


                </div>

                <div id="jobexperience"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Job Experience</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Update your job experience history.</p>                        
                      </div>
                      <div>
                        <Link href="#" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Update</Link>
                      </div>
                  </div>

                  <div className="mt-8">
                      <table className="min-w-full divide-y divide-gray-300 border border-slate-200">

                          <thead className="">
                              <tr>
                              <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-4">
                                  Exployment Status
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
                              {jobExperience.map((experience, idx) => (
                              <tr key={`experience-${experience.title}-${idx}`}>
                                  <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                                  {experience.status}
                                  <dl className="font-normal lg:hidden">
                                      <dt className="sr-only">Exployment Status</dt>
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
                              ))}
                          </tbody>

                      </table>
                  </div> 


                </div>

                <div id="skills"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Skills and Tools</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Update your skills and tools.</p>                        
                      </div>
                      <div>
                        <Link href="#" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Add</Link>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">

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
                                {skills.map((skill, idx) => (
                                <tr key={`skill-${skill.title}-${idx}`}>
                                    <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                                    {skill.title}
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
                                        <a href="#" className="text-brand-600 hover:text-brand-900">
                                            Update<span className="sr-only"> skill, {skill.title}</span>
                                        </a>
                                    </td>                             
                                </tr>
                                ))}
                            </tbody>

                        </table>
                    </div> 

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
                                {tools.map((tool, idx) => (
                                <tr key={`tool-${tool.title}-${idx}`}>
                                    <td className="w-full max-w-0 py-4 pr-3 pl-4 text-xs lg:text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-4">
                                    {tool.title}
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
                                        <a href="#" className="text-brand-600 hover:text-brand-900">
                                            Update<span className="sr-only"> tool, {tool.title}</span>
                                        </a>
                                    </td>                             
                                </tr>
                                ))}
                            </tbody>

                        </table>
                    </div> 

                  </div>

                </div>  

 
                <div id="goals"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Goals</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Set some SMART goals. Your goals will be only visible to the mentors you apply for.</p>                        
                      </div>
                      <div>
                        <Link href="#" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Add</Link>
                      </div>
                  </div>

                  <div className="mt-8">
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
                                  Description
                              </th>
                              <th
                                  scope="col"
                                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                              >
                                  Expected Results
                              </th>
                              <th
                                  scope="col"
                                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                              >
                                  Details
                              </th> 
                                <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>                                                                                        
                              </tr>
                          </thead>
                          
                          <tbody className="divide-y divide-gray-200 bg-white">
                              {goals.map((goal, idx) => (
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
                                        <div className=" text-xs text-gray-900 w-fit  py-0.5">{"Timeline: "}{goal.details.extl}</div>
                                        <div className=" text-xs text-gray-900 w-fit  py-0.5">{"Meetings/Month: "}{goal.details.exmwmpm}</div>
                                        <div className=" text-xs text-gray-900 w-fit  py-0.5">{"Availability/Week(Hours): "}{goal.details.mattwot}</div>                                     
                                      </dd>                                      
                                      <dt className="sr-only sm:hidden">Edit</dt>
                                      <dd className="mt-3 truncate text-xs text-gray-500 sm:hidden">
                                        <a href="#" className="text-brand-600 hover:text-brand-900">
                                            Update<span className="sr-only"> goal, {goal.title}</span>
                                        </a>                                        
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
                                      <div className=" text-sm text-gray-900 w-fit  py-0.5">{"Timeline: "}{goal.details.extl}</div>
                                      <div className=" text-sm text-gray-900 w-fit  py-0.5">{"Meetings/Month: "}{goal.details.exmwmpm}</div>
                                      <div className=" text-sm text-gray-900 w-fit  py-0.5">{"Availability/Week(Hours): "}{goal.details.mattwot}</div>
                                  </td>                                  
                                  <td className="min-w-[70px] hidden sm:table-cell py-4 pr-4 pl-3 text-right text-xs lg:text-sm font-medium sm:pr-4">
                                        <a href="#" className="text-brand-600 hover:text-brand-900">
                                            Update<span className="sr-only"> goal, {goal.title}</span>
                                        </a>
                                  </td>                                                                  
                              </tr>
                              ))}
                          </tbody>

                      </table>
                  </div> 


                </div>


              </div>

              <div id="security" className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base/7 font-semibold text-black">Security</h2>
                  <p className="mt-1 text-sm/6 text-gray-600">Update your password to keep your account secure.</p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="current-password" className="block text-sm/6 font-medium text-black">
                        Current password
                      </label>
                      <div className="mt-2">
                        <input
                          id="current-password"
                          name="current_password"
                          type="password"
                          autoComplete="current-password"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="new-password" className="block text-sm/6 font-medium text-black">
                        New password
                      </label>
                      <div className="mt-2">
                        <input
                          id="new-password"
                          name="new_password"
                          type="password"
                          autoComplete="new-password"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-black">
                        Confirm password
                      </label>
                      <div className="mt-2">
                        <input
                          id="confirm-password"
                          name="confirm_password"
                          type="password"
                          autoComplete="new-password"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex">
                    <button
                      type="submit"
                      className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
 
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base/7 font-semibold text-black">Delete account</h2>
                  <p className="mt-1 text-sm/6 text-red-600">
                    Danger Zone! This action is irreversible
                  </p>
                </div>

                <form className="flex items-start md:col-span-2">
                  <button
                    type="submit"
                    className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-red-400"
                  >
                    Delete Account
                  </button>
                </form>
              </div>
              
            </div>

          </main>
        </div>
      </div>
    </>
  )
}
