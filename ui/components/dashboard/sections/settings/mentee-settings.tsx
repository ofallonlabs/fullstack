import NavTab from '@/ui/components/dashboard/tabs/nav-tab';
import Link from 'next/link';

import PersonalInformationFormWrapper from '@/ui/components/dashboard/forms/mentee/wrappers/personal-information-form-wrapper';
import ProfileFormWrapper from '@/ui/components/dashboard/forms/mentee/wrappers/profile-form-wrapper';


import GoalsTableWrapper from '@/ui/components/dashboard/tables/mentee/wrappers/goals-table-wrapper';
import EducationTableWrapper from '@/ui/components/dashboard/tables/mentee/wrappers/education-table-wrapper';
import JobExperienceTableWrapper from '@/ui/components/dashboard/tables/mentee/wrappers/job-experience-table-wrapper';
import SkillsTableWrapper from '@/ui/components/dashboard/tables/mentee/wrappers/skills-table-wrapper';
import ToolsTableWrapper from '@/ui/components/dashboard/tables/mentee/wrappers/tools-table-wrapper';

const secondaryNavigation = [
  { name: 'Personal Information', href: '#personalinformation', current: true },
  { name: 'Profile', href: '#profile', current: false },
  { name: 'Education', href: '#education', current: false },
  { name: 'Job Experience', href: '#jobexperience', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Goals', href: '#goals', current: false },  
  // { name: 'Security', href: '#security', current: false },   
]


export default async function MenteeSettings({userId, menteeId} : {userId: string, menteeId: number}) {


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

                <NavTab navItems={secondaryNavigation}/>

              </div> 


            <div className="divide-y divide-white/5">

              <div id="personalinformation" className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base/7 font-semibold text-black">Personal Information</h2>
                  <p className="mt-1 text-sm/6 text-gray-600">Update your photo and personal details.</p>
                </div>

                <div className="md:col-span-2">

                  <PersonalInformationFormWrapper userId={userId} />
                   
                </div>

              </div>

              <div id="profile" className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base/7 font-semibold text-black">Profile</h2>
                  <p className="mt-1 text-sm/6 text-gray-600">Update your portfolio and bio.</p>
                </div>
                <div className="md:col-span-2">

                  <ProfileFormWrapper userId={userId} />

                </div>

              </div>

              <div className="w-full bg-slate-100 divide-y divide-y-2 divide-slate-200">

                <div id="education"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">

                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Education</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Update your education history.</p>                        
                      </div>
                      <div>
                        <Link href="/dashboard/settings/information/education" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Update</Link>
                      </div>
                  </div>

                  <EducationTableWrapper menteeId={menteeId} /> 


                </div>

                <div id="jobexperience"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">

                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Job Experience</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Update your job experience history.</p>                        
                      </div>
                      <div>
                        <Link href="/dashboard/settings/information/experience" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Update</Link>
                      </div>
                  </div>

                  <JobExperienceTableWrapper menteeId={menteeId} /> 


                </div>

                <div id="skills"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Skills and Tools</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Update your skills and tools.</p>                        
                      </div>
                      <div className="flex flex-row gap-2">
                        <Link href="/dashboard/settings/information/skill" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Add Skills</Link>
                        <Link href="/dashboard/settings/information/tool" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Add Tools</Link>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">

                    <SkillsTableWrapper menteeId={menteeId}/> 

                    <ToolsTableWrapper menteeId={menteeId}/> 

                  </div>

                </div>  

 
                <div id="goals"  className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-start justify-start md:flex-row md:justify-between md:items-center md:gap-0 gap-4">
                      <div>
                        <h2 className="text-base/7 font-semibold text-black">Goals</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Set some SMART goals. Your goals will be only visible to the mentors you apply for.</p>                        
                      </div>
                      <div>
                        <Link href="/dashboard/settings/information/goal" className="rounded-md bg-brand-500 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">Add</Link>
                      </div>
                  </div>

                  <GoalsTableWrapper menteeId={menteeId}/>


                </div>


              </div>

              <div id="security" className="hidden grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
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
 
              <div className="hidden grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
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
