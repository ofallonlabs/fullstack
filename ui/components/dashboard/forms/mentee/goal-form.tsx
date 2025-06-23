"use client";

import {useActionState} from "react";
import { MenteeGoalFormActionType, ErrorMessageType, GoalDataType } from "@/definition/dashboard/mentee/goal-schema";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";


export default function GoalForm({action, goalData}:{action:MenteeGoalFormActionType, goalData?:GoalDataType}){
    const [state, dispatch] = useActionState(action ,undefined);  
    return (
        <>
            <form action={dispatch}>

                <div className="pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Goals</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Update your Goals</p>

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
                                defaultValue={goalData ? goalData.title : undefined}
                                autoComplete="title"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                defaultValue={goalData ? goalData.description : undefined}
                                autoComplete="description"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                            <label htmlFor="exr" className="block text-sm/6 font-medium text-gray-900">
                                Expected Results
                            </label>
                            <div className="mt-2">
                                <input
                                id="exr"
                                name="exr"
                                type="text"
                                defaultValue={goalData ? goalData.exr : undefined}                                
                                autoComplete="exr"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "exr")
                                                return <div key={`exr-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}                             
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="ext" className="block text-sm/6 font-medium text-gray-900">
                                Expected Timeline
                            </label>
                            <div className="mt-2">
                                <input
                                id="ext"
                                name="ext"
                                type="text"
                                defaultValue={goalData ? goalData.ext : undefined}                                  
                                autoComplete="ext"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "ext")
                                                return <div key={`ext-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}                             
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="exmwmpm" className="block text-sm/6 font-medium text-gray-900">
                                Expected Meetings per month
                            </label>
                            <div className="mt-2">
                                <input
                                id="exmwmpm"
                                name="exmwmpm"
                                type="number"
                                defaultValue={goalData ? goalData.exmwmpm : undefined}                                     
                                autoComplete="exmwmpm"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "exmwmpm")
                                                return <div key={`exmwmpm-error-${idx}`}>{err.message}</div>
                                            else return null;    
                                        })
                                    }
                                </div>
                            )}                             
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="mattwot" className="block text-sm/6 font-medium text-gray-900">
                                Available hours per week
                            </label>
                            <div className="mt-2">
                                <input
                                id="mattwot"
                                name="mattwot"
                                type="number"
                                defaultValue={goalData ? goalData.mattwot : undefined}                                
                                autoComplete="mattwot"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {state?.errors && (
                                <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                                    {
                                        state.errors?.map((err, idx)=>{
                                            if(err.target === "mattwot")
                                                return <div key={`mattwot-error-${idx}`}>{err.message}</div>
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
                    message={state?.message?.content || "Something went wrong goals"}
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