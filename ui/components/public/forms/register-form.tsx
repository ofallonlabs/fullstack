'use client';
import Link from "next/link";
import {useActionState} from "react";
import { RegisterFormActionType, ErrorMessageType } from "@/definition/UserDefinition";
import FormButton from "@/ui/components/common/button/form-button";
import SimpleMessage, { MessageState } from "@/ui/components/common/message-box/simple-message";

const mentormentee = [
  { id: 'MENTEE', title: 'Mentee' },
  { id: 'MENTOR', title: 'Mentor' }
]

export default function RegisterForm({action}:{action:RegisterFormActionType}){
     const [state, dispatch] = useActionState(action,undefined);
    return (
        <form action={dispatch} className="space-y-6">
            <div>
              <fieldset>
                  <div className="mt-6 space-y-6 sm:flex sm:items-start sm:space-y-0 sm:space-x-10">
                      {mentormentee.map((mentormentee) => (
                      <div key={mentormentee.id} className="flex items-center">
            <input
            defaultChecked={mentormentee.id === 'MENTEE'}
            id={mentormentee.id}
            name="role"
            type="radio"
            value={mentormentee.id}
            className="relative size-5 text-base appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-brand-600 checked:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
            />
            <label htmlFor={mentormentee.id} className="ml-3 block text-sm/6 font-medium text-gray-900">
            {mentormentee.title}
            </label>
                      </div>
                      ))}
                  </div>
              </fieldset>
                {
                        state?.errors?.role?.map((err,idx)=>{
              return <div className="text-xs mt-1 text-red-500 px-2" key={`role-${idx}`}>{err}</div>
                        })
                }
            </div>
        
            <div>
              <label htmlFor="firstname" className="block text-sm/6 font-medium text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  autoComplete="firstname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                />
              </div>
                  {
                      state?.errors?.firstname?.map((err,idx)=>{
            return <div className="text-xs mt-1 text-red-500 px-2" key={`firstname-${idx}`}>{err}</div>
                      })
                  }
            </div>


            <div>
              <label htmlFor="lastname" className="block text-sm/6 font-medium text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  required
                  autoComplete="lastname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                />
              </div>
                  {
                      state?.errors?.lastname?.map((err,idx)=>{
            return <div className="text-xs mt-1 text-red-500 px-2" key={`lastname-${idx}`}>{err}</div>
                      })
                  }              
            </div>
        

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 sm:text-sm/6"
                />
              </div>
                  {
                      state?.errors?.email?.map((err,idx)=>{
            return <div className="text-xs mt-1 text-red-500 px-2" key={`email-${idx}`}>{err}</div>
                      })
                  }                  
            </div>
        

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
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
                <span className="text-gray-600 text-sm">Must be at least 8 characters.</span>
              </div>
                  {
                      state?.errors?.password?.map((err,idx)=>{
            return <div className="text-xs mt-1 text-red-500 px-2" key={`password-${idx}`}>{err}</div>
                      })
                  }                 
            </div>
        
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-brand-600 checked:bg-brand-600 indeterminate:border-brand-600 indeterminate:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-checked:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-indeterminate:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label htmlFor="remember-me" className="block text-sm/6 text-gray-900 space-x-1">
                  <span>I agree with</span>          
                  <Link className="text-gray-400 font-semibold hover:underline" href={"/privacy-policy"}>privacy policy</Link>
                  <span>and</span> 
                  <Link className="text-gray-400 font-semibold hover:underline" href={"/terms-of-service"}>terms of services</Link>  
                </label>
              </div> 
            </div>
        
            <div>
              <SimpleMessage
                message={state?.message?.content || "Something went wrong signing in"}
                state={
                  state?.message?.type === ErrorMessageType.SUCCESS ? MessageState.SUCCESS
                  : state?.message?.type === ErrorMessageType.FAILURE ? MessageState.FAILURE
                  : MessageState.NONE
                }
              />           
            </div>

            <div>
              <FormButton 
                title = {{ idle:"Create account", pending:"Creating account..." }} 
                style = {{ 
                  idle: "flex w-full justify-center rounded-md bg-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-pointer text-white shadow-xs hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600", 
                  pending: "flex w-full justify-center rounded-md bg-brand-100 border border-brand-500 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-not-allowed text-brand-500 animate-pulse duration-300" 
                }}
              />
        
              <a
              href="#"
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                  fill="#EA4335"
                />
                <path
                  d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                  fill="#4285F4"
                />
                <path
                  d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                  fill="#34A853"
                />
              </svg>
              <span className="text-sm/6 font-semibold">Sign up with Google</span>
            </a>
            </div>


        </form>
    );
}