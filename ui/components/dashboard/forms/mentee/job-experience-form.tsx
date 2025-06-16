"use client";

import {useActionState} from "react";
import { JobExperienceFormActionType, ErrorMessageType } from "@/definition/dashboard/mentee/job-experience-schema";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";
import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function JobExperienceForm({action}:{action:JobExperienceFormActionType}){
    const [enabled, setEnabled] = useState(false);
    const [state, dispatch] = useActionState(action ,undefined);  

    return (
        <>
            <form action={dispatch}>

                <div className="pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Job Experience</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Update your job exprience</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="status" className="block text-sm/6 font-medium text-gray-900">
                                Employed / Unemployed
                            </label>
                            <div className="mt-2">
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    name="status"
                                    id="status"
                                    className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 focus:outline-hidden data-checked:bg-brand-600"
                                    >
                                    <span className="sr-only">Status</span>
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out group-data-checked:translate-x-5"
                                    />
                                </Switch>
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "status")
                                                return <div key={`status-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}                               
                        </div>

                        {
                            enabled
                            ?
                            <>                
                                <div className="sm:col-span-4">
                                        <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                            Job Title
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            id="title"
                                            name="title"
                                            type="text"
                                            autoComplete="title"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                            />
                                        </div>
                                        {state?.errors && (
                                            <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                                {
                                                    state.errors?.map((err, idx)=>{
                                                        if(err.target === "title")
                                                            return <div key={`title-error-${idx}`}>{err.message}</div>
                                                        else return null;    
                                                    })
                                                }
                                            </div>
                                        )}                                          
                                </div>

                                <div className="sm:col-span-4">
                                        <label htmlFor="employer" className="block text-sm/6 font-medium text-gray-900">
                                            Current Employer
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            id="employer"
                                            name="employer"
                                            type="text"
                                            autoComplete="employer"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                            />
                                        </div>
                                        {state?.errors && (
                                            <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                                {
                                                    state.errors?.map((err, idx)=>{
                                                        if(err.target === "employer")
                                                            return <div key={`employer-error-${idx}`}>{err.message}</div>
                                                        else return null;    
                                                    })
                                                }
                                            </div>
                                        )}                                           
                                </div>
                            </>
                            :null
                        }

                    </div>
                </div>

                <div>
                  <SimpleMessage
                    message={state?.message?.content || "Something went wrong updating job experience"}
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