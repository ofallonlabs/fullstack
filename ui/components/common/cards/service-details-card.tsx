"use client";

import serviceDeleteAction from "@/actions/dashboard/mentor/service-delete-action";
import { ServiceDetailsCardData } from "@/definition/public/data-types";
import Link from "next/link";
import { useTransition } from "react";

export default function ServiceDetailsCard({serviceData, actionsEnabled} : {serviceData: ServiceDetailsCardData, actionsEnabled: boolean}){
    const [pending, startTransition] = useTransition();

    const handleDeleteOnClick = () => {

        startTransition(async ()=>{
            await serviceDeleteAction(serviceData.id);
        });

    }
    return (
        <>
            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Title"}</div>
                <div className="text-sm font-medium text-slate-600">{serviceData.title}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Description"}</div>
                <div className="text-sm font-medium text-slate-600">{serviceData.description}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Qualifications"}</div>
                <div className="text-sm font-medium text-slate-600">{serviceData.qualifications}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Category"}</div>
                <div className="text-sm font-medium text-slate-600">{serviceData.category}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Type"}</div>
                <div className="text-sm font-medium text-slate-600">{serviceData.type}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Price"}</div>
                <div className="text-sm font-medium text-slate-600">{serviceData.price}</div>
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-base font-semibold text-slate-800">{"Mentor"}</div>
                <Link href={`/profice/${serviceData.mentorid}/${serviceData.mentorname}`} className="text-sm font-medium text-blue-600 hover:cursor-pointer">{serviceData.mentorname}</Link>
            </div> 

            {
                actionsEnabled 
                ?
                    <div className="flex flex-row gap-4">
                        <Link href={`/dashboard/services/edit/${serviceData.id}`} className="bg-brand-100 border border-brand-600 text-brand-600 rounded px-4 py-1 text-sm font-bold">{"Edit"}</Link>
                        <button disabled={pending} onClick={handleDeleteOnClick} className="bg-red-100 border border-red-600 text-red-600 rounded px-4 py-1 text-sm font-bold">{pending ? "Deleting..." : "Delete"}</button>
                    </div>  

                :  
                    <div className="flex flex-row gap-4">
                        <button className="bg-red-100 border border-red-600 text-red-600 rounded px-4 py-1 text-sm font-bold">{"Apply"}</button>
                    </div>                  
            }                                  
        </>        
    );

}