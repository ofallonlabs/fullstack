"use client";

import {useActionState} from "react";
import { mentorPersonalInformationFormActionType, ErrorMessageType } from "@/definition/dashboard/mentor/personal-information-schema";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";

export default function PersonalInformationForm({action}:{action:mentorPersonalInformationFormActionType}){
    const [state, dispatch] = useActionState(action ,undefined);  
    return (
        <>
            <form action={dispatch}>

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
                          disabled
                          className="rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black shadow-xs hover:bg-black/20"
                        >
                          Change avatar
                        </button>
                        <p className="mt-2 text-xs/5 text-gray-600">JPG, GIF or PNG. 1MB max.</p>
                      </div>
                      {state?.errors && (
                          <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                            {
                                state.errors?.map((err, idx)=>{
                                    if(err.target === "avatar")
                                        return <div key={`avatar-error-${idx}`}>{err.message}</div>
                                    else return null;    
                                })
                            }
                          </div>
                      )}                      
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm/6 font-medium text-black">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="firstname"
                          type="text"
                          autoComplete="given-name"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      {state?.errors && (
                          <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                            {
                                state.errors?.map((err, idx)=>{
                                    if(err.target === "firstname")
                                        return <div key={`firstname-error-${idx}`}>{err.message}</div>
                                    else return null;    
                                })
                            }
                          </div>
                      )}                           
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm/6 font-medium text-black">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="lastname"
                          type="text"
                          autoComplete="family-name"
                          className="block w-full rounded-md bg-black/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-500 sm:text-sm/6"
                        />
                      {state?.errors && (
                          <div className="text-red-500 text-xs mt-0.5 w-full text-left">
                            {
                                state.errors?.map((err, idx)=>{
                                    if(err.target === "lastname")
                                        return <div key={`lastname-error-${idx}`}>{err.message}</div>
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
                    message={state?.message?.content || "Something went wrong updating personal information"}
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
                        idle: "flex w-full justify-center rounded-md bg-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-pointer text-white shadow-xs hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600", 
                        pending: "flex w-full justify-center rounded-md bg-brand-100 border border-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-not-allowed text-brand-500 animate-pulse duration-300" 
                      }}
                    />
                </div>
            </form>        
        </>       
    );
}