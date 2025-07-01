"use client";

import applicationApplyAction from "@/actions/dashboard/mentee/application-apply-action";
import serviceDeleteAction from "@/actions/dashboard/mentor/service-delete-action";
import { ServiceDetailsCardData } from "@/definition/public/data-types";
import { useTransition } from "react";
import LinkWithState from '@/ui/components/common/link/new-service-link';

export default function ServiceDetailsCard({serviceData, actionsEnabled} : {serviceData: ServiceDetailsCardData, actionsEnabled: boolean}){
    const [deletePending, startDeleteTransition] = useTransition();
    const [applyPending, startApplyTransition] = useTransition();

    const handleDeleteOnClick = () => {

        startDeleteTransition(async ()=>{
            await serviceDeleteAction(serviceData.id);
        });

    }

    const handleApplyOnClick = () => {

        startApplyTransition(async ()=>{
            await applicationApplyAction(serviceData.id, serviceData.needapproval);
        });

    }

    return (
        <div className="space-y-2">

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Title"}</div>
                <div className="text-sm font-medium text-slate-600 text-balance">{serviceData.title}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Description"}</div>
                <div className="text-sm font-medium text-slate-600 text-balance">{serviceData.description}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Qualifications"}</div>
                <div className="text-sm font-medium text-slate-600 text-balance">{serviceData.qualifications}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Category"}</div>
                <div className="text-sm font-medium text-slate-600 text-balance">{serviceData.category}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Type"}</div>
                <div className="text-sm font-medium text-slate-600 text-balance">{serviceData.type}</div>
            </div>

            <div className="flex flex-col gap-1 mb-6">
                <div className="text-base font-semibold text-slate-800">{"Price"}</div>
                <div className="text-sm font-medium text-slate-600 text-balance">{serviceData.price}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Mentor"}</div>

                <LinkWithState href={`/profile/${serviceData.mentorid}/${serviceData.mentorname}`} state={
                    {
                        title: { idle: serviceData.mentorname, pending: serviceData.mentorname },
                        style: {
                          idle:"w-fit flex flex-row items-center justify-center gap-1.5 text-sm font-medium text-blue-600 hover:cursor-pointer",
                          pending:"w-fit flex flex-row items-center justify-center gap-1.5 text-sm font-medium text-blue-800 hover:cursor-forbidden"
                        }
                    }
                }/>

            </div> 

            {
                actionsEnabled 
                ?
                    <div className="flex flex-row gap-4">

                        <LinkWithState href={`/dashboard/services/edit/${serviceData.id}`} 
                            state={
                                {
                                    title: { idle: "Edit", pending: "Redirecting" },
                                    style: {
                                        idle:"w-fit flex flex-row items-center justify-center gap-1.5 bg-brand-100 border border-brand-600 text-brand-600 rounded px-4 py-1 text-sm font-bold",
                                        pending:"w-fit flex flex-row items-center justify-center gap-1.5 bg-brand-100 border border-brand-800 text-brand-800 rounded px-4 py-1 text-sm font-bold"
                                    }
                                }
                            }
                        />

                        <button disabled={deletePending} onClick={handleDeleteOnClick} className="bg-red-100 border border-red-600 text-red-600 rounded px-4 py-1 text-sm font-bold">{deletePending ? "Deleting..." : "Delete"}</button>
                    </div>  

                :  
                    <div className="flex flex-row gap-4">
                        <button disabled={applyPending} onClick={handleApplyOnClick}  className="bg-brand-100 border border-brand-600 text-brand-600 rounded px-4 py-1 text-sm font-bold">{applyPending ? "Applyting..." : "Apply"}</button>
                    </div>                  
            } 
                                             
        </div>        
    );

}