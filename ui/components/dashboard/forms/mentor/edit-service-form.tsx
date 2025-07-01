"use client";

import {useActionState} from "react";
import { addServiceFormActionType, ErrorMessageType } from "@/definition/dashboard/mentor/service-schema";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { CalendlyEventListType } from "@/definition/CalendlyDefinition";
import type { UpdateMentorService } from "@/lib/db/services/mentor-services-service";

export default function EditServiceForm({events, action, serviceData}:{events:CalendlyEventListType[], action:addServiceFormActionType, serviceData:UpdateMentorService}){
    const [enabled, setEnabled] = useState(serviceData.needApproval || false);
    const [state, dispatch] = useActionState(action ,undefined);  

    return (
        <>
            <form action={dispatch}>

                <div className="pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Service</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Update Service</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                id="title"
                                name="title"
                                type="text"
                                defaultValue={serviceData.title || undefined}
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
                            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <input
                                id="description"
                                name="description"
                                type="text"
                                defaultValue={serviceData.description || undefined}                                
                                autoComplete="description"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "description")
                                                return <div key={`description-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}  
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="qualifications" className="block text-sm/6 font-medium text-gray-900">
                                Qualifications
                            </label>
                            <div className="mt-2">
                                <input
                                id="qualifications"
                                name="qualifications"
                                type="text"
                                defaultValue={serviceData.qualifications || undefined}                                    
                                autoComplete="qualifications"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "qualifications")
                                                return <div key={`qualifications-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}  
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="type" className="block text-sm/6 font-medium text-gray-900">
                                Type
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                id="type"
                                name="type"
                                defaultValue={serviceData.type || undefined}     
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                >
                                <option value="Not Selected">Select a type</option>
                                <option value="SESSION">Session</option>
                                <option value="SUBSCRIPTION">Subscription</option>
                                </select>
                                <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "type")
                                                return <div key={`type-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}  
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                                Category
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                id="category"
                                name="category"
                                defaultValue={serviceData.category || undefined}  
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                >
                                    <option value="Not Selected">Select a category</option>
                                    <option value="PortfolioReview">PortfolioReview</option>
                                    <option value="ProjectReview">ProjectReview</option>Add commentMore actions
                                    <option value="InterviewPreparation">InterviewPreparation</option>
                                    <option value="MockInterview">MockInterview</option>
                                    <option value="ResumeReview">ResumeReview</option>
                                    <option value="AskMeAnything">AskMeAnything</option>
                                    <option value="WeeklyMeetings">WeeklyMeetings</option>

                                </select>
                                <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "category")
                                                return <div key={`category-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}  
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                id="price"
                                name="price"
                                type="number"
                                min={0}
                                max={1000}
                                autoComplete="price"
                                defaultValue={(Number(serviceData.price) ? Number(serviceData.price)/1000 : undefined) || undefined}                                  
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "price")
                                                return <div key={`price-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}  
                        </div> 

                        <div className="sm:col-span-3">
                            <label htmlFor="link" className="block text-sm/6 font-medium text-gray-900">
                                Calendly Events
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                id="link"
                                name="link"
                                defaultValue="Not Selected"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                                >
                                    <option value="Not Selected">Select an event</option>
                                    {
                                        events.map((event)=>{
                                            return <option value={event.booking_url}>{event.name}</option>;
                                        })
                                    }                                    

                                </select>
                                <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "link")
                                                return <div key={`link-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}  
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="needApproval" className="block text-sm/6 font-medium text-gray-900">
                                Need approval (Accept/Reject)
                            </label>
                            <div className="mt-2">
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    name="needApproval"
                                    id="needApproval"
                                    className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 focus:outline-hidden data-checked:bg-brand-600"
                                    >
                                    <span className="sr-only">Need approval</span>
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
                                if(err.target === "needApproval")
                                    return <div key={`needApproval-error-${idx}`}>{err.message}</div>
                                else return null;    
                            })
                                    }
                                </div>
                            )}                               
                        </div>


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

                <div className="mt-8 flex hidden">
                    <FormButton 
                      title = {{ idle:"Update", pending:"Updating..." }} 
                      style = {{ 
                        idle: "flex w-full md:w-fit md:w-fit justify-center rounded-md bg-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-pointer text-white shadow-xs hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600", 
                        pending: "flex w-full md:w-fit md:w-fit justify-center rounded-md bg-brand-100 border border-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-not-allowed text-brand-500 animate-pulse duration-300" 
                      }}
                    />
                </div>
            </form>        
        </>       
    );
}