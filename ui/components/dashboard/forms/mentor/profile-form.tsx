"use client";

import {useActionState} from "react";
import { mentorProfileFormActionType, ErrorMessageType } from "@/definition/dashboard/mentor/profile-schema";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ProfileForm({action}:{action:mentorProfileFormActionType}){
    const [state, dispatch] = useActionState(action ,undefined);  
    return (
        <>
            <form action={dispatch}>

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
                        {state?.errors && (
                            <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                {
                                    state.errors?.map((err, idx)=>{
                                        if(err.target === "website")
                                            return <div key={`website-error-${idx}`}>{err.message}</div>
                                        else return null;    
                                    })
                                }
                            </div>
                        )}    
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
                        {state?.errors && (
                            <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                {
                                    state.errors?.map((err, idx)=>{
                                        if(err.target === "tagline")
                                            return <div key={`tagline-error-${idx}`}>{err.message}</div>
                                        else return null;    
                                    })
                                }
                            </div>
                        )}
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
                        {state?.errors && (
                            <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                {
                                    state.errors?.map((err, idx)=>{
                                        if(err.target === "currentjob")
                                            return <div key={`currentjob-error-${idx}`}>{err.message}</div>
                                        else return null;    
                                    })
                                }
                            </div>
                        )}
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
                        {state?.errors && (
                            <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                {
                                    state.errors?.map((err, idx)=>{
                                        if(err.target === "bio")
                                            return <div key={`bio-error-${idx}`}>{err.message}</div>
                                        else return null;    
                                    })
                                }
                            </div>
                        )}                        
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
                        {state?.errors && (
                            <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                {
                                    state.errors?.map((err, idx)=>{
                                        if(err.target === "country")
                                            return <div key={`country-error-${idx}`}>{err.message}</div>
                                        else return null;    
                                    })
                                }
                            </div>
                        )}                          
                    </div>

                </div>


                <div>
                  <SimpleMessage
                    message={state?.message?.content || "Something went wrong updating profile"}
                    state={
                      state?.message?.type === ErrorMessageType.SUCCESS ? MessageState.SUCCESS
                      : state?.message?.type === ErrorMessageType.FAILURE ? MessageState.FAILURE
                      : MessageState.NONE
                    }
                  />          
                </div> 

                <div className="mt-8 flex">
                    <FormButton 
                      title = {{ idle:"Save", pending:"Saving..." }} 
                      style = {{ 
                        idle: "flex w-full md:w-fit justify-center rounded-md bg-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-pointer text-white shadow-xs hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600", 
                        pending: "flex w-full md:w-fit justify-center rounded-md bg-brand-100 border border-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-not-allowed text-brand-500 animate-pulse duration-300" 
                      }}
                    />
                </div>
            </form>        
        </>       
    );
}