'use client'

import { useEffect, useState } from 'react';
import { Description, Field, Label, Switch } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { usePathname } from 'next/navigation';

const secondaryNavigation = [
  { name: 'Personal Information', href: '#personalinformation', current: true },
  { name: 'Profile', href: '#profile', current: false },
  { name: 'Paymnet', href: '#payment', current: false },
  { name: 'Booking', href: '#booking', current: false },
  { name: 'Security', href: '#security', current: false },
]



export default function MentorSettings() {
  const [paymentEnabled, setPaymentEnabled] = useState(false);
  const [bookingEnabled, setBookingEnabled] = useState(false);
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

              <div id='personalinformation' className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
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

              <div id='profile' className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
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

              <div id='payment' className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">

                <div>
                  <h2 className="text-base/7 font-semibold text-black">Payment</h2>
                  <p className="mt-1 text-sm/6 text-gray-600">Connect your account to Stripe such that your mentees can pay you securely</p>
                </div>

                <div className="md:col-span-2 bg-slate-100 px-2 py-4 rounded">
                  <Field className="flex items-center justify-between">
                    <span className="flex grow flex-col">
                      <Label as="span" passive className="text-sm/6 font-medium text-gray-900">
                        Connect to Stripe
                      </Label>
                      <Description as="span" className="text-sm text-gray-500">
                        Connect your account to Stripe for easy payment
                      </Description>
                    </span>
                    <Switch
                      checked={paymentEnabled}
                      onChange={setPaymentEnabled}
                      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden data-checked:bg-indigo-600"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-5"
                      />
                    </Switch>
                  </Field>
                </div>

              </div>

              <div id='booking' className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">

                <div>
                  <h2 className="text-base/7 font-semibold text-black">Booking</h2>
                  <p className="mt-1 text-sm/6 text-gray-600">Connect your account to Calendly for easy scheduling and instant booking</p>
                </div>

                <div className="md:col-span-2 bg-slate-100 px-2 py-4 rounded">
                  <Field className="flex items-center justify-between">
                    <span className="flex grow flex-col">
                      <Label as="span" passive className="text-sm/6 font-medium text-gray-900">
                        Connect to Calendly
                      </Label>
                      <Description as="span" className="text-sm text-gray-500">
                        Connect your account to Calendly for easy scheduing
                      </Description>
                    </span>
                    <Switch
                      checked={bookingEnabled}
                      onChange={setBookingEnabled}
                      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden data-checked:bg-indigo-600"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-5"
                      />
                    </Switch>
                  </Field>
                </div>

              </div>


              <div id='security' className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
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
