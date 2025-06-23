"use client";

import {useActionState} from "react";
import { MenteeEducationFormActionType, ErrorMessageType } from "@/definition/dashboard/mentee/education-schema";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";
import { MenteeEducationType } from "@/lib/db/services/mentee-background-service";

export default function EducationForm({action, formData}:{action:MenteeEducationFormActionType, formData: Partial<MenteeEducationType> | undefined}){
    const [state, dispatch] = useActionState(action ,undefined);  
    return (
        <>
            <form action={dispatch}>

                <div className="pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Education</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Update your educational history</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="hdl" className="block text-sm/6 font-medium text-gray-900">
                                Highest Educational Level
                            </label>
                            <div className="mt-2">
                                <input
                                id="hdl"
                                name="hdl"
                                type="text"
                                defaultValue={formData ? formData.highestEducationalLevel : undefined}
                                autoComplete="hdl"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "hdl")
                                                return <div key={`hdl-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}                             
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="fos" className="block text-sm/6 font-medium text-gray-900">
                                Field of Study
                            </label>
                            <div className="mt-2">
                                <input
                                id="fos"
                                name="fos"
                                type="text"
                                autoComplete="fos"
                                defaultValue={formData ? formData.fieldOfStudy : undefined}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "fos")
                                                return <div key={`fos-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}                               
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="gradyear" className="block text-sm/6 font-medium text-gray-900">
                                Graduation Year
                            </label>
                            <div className="mt-2">
                                <input
                                    id="gradyear"
                                    name="gradyear"
                                    type="number"
                                    defaultValue={formData ? formData.graduationYear : undefined}
                                    autoComplete="gradyear"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "gradyear")
                                                return <div key={`gradyear-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}                                
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="gradinstitute" className="block text-sm/6 font-medium text-gray-900">
                                Graduation Institude
                            </label>
                            <div className="mt-2">
                                <input
                                    id="gradinstitute"
                                    name="gradinstitute"
                                    type="text"
                                    defaultValue={formData ? formData.graduationInstitute : undefined}
                                    autoComplete="gradinstitute"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "gradinstitute")
                                                return <div key={`gradinstitute-error-${idx}`}>{err.message}</div>
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
                    message={state?.message?.content || "Something went wrong updating education"}
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