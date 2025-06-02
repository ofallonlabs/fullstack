'use client';

import {useActionState} from "react";
import { ResetPasswordFormActionType, ErrorMessageType } from "@/definition/UserDefinition";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";

export default function ResetPasswordForm({action}:{action:ResetPasswordFormActionType}){
     const [state, dispatch] = useActionState(action,undefined);

    return (
       <form action={dispatch} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                />
              </div>
                {
                    state?.errors?.password?.map((err,idx)=>{
                        return <div className="text-xs mt-1 text-red-500 px-2" key={`password-${idx}`}>{err}</div>
                    })
                }                    
            </div>

            <div>
              <SimpleMessage
                message={state?.message?.content || "Something went wrong resetting password"}
                state={
                  state?.message?.type === ErrorMessageType.SUCCESS ? MessageState.SUCCESS
                  : state?.message?.type === ErrorMessageType.FAILURE ? MessageState.FAILURE
                  : MessageState.NONE
                }
              />          
            </div> 
   
            <div>
              <FormButton 
                title = {{ idle:"Reset password", pending:"Resetting..." }} 
                style = {{ 
                  idle: "flex w-full justify-center rounded-md bg-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-pointer text-white shadow-xs hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600", 
                  pending: "flex w-full justify-center rounded-md bg-brand-100 border border-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-not-allowed text-brand-500 animate-pulse duration-300" 
                }}
              />

            </div>
            
          </form>
    );
}