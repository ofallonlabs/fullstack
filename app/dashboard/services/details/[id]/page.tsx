import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { getMentorSeriveByServiceId } from "@/lib/db/services/mentor-services-service";
import ServiceDetailsCard from "@/ui/components/common/cards/service-details-card";
import { ServiceDetailsCardData } from "@/definition/public/data-types";

export default async function ServiceDetailsPage({ params }: { params: Promise<{ id: string }> }){
    const { id } = await params;
    if(!id) return null;

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        return <div>Not authenticated</div>;
    }

    const user = session.user;
    if(!user) return null;

    const targetService = await getMentorSeriveByServiceId(+id);

    if(!targetService) return null;

    const serviceData : ServiceDetailsCardData = {
        id: targetService.id,
        title : targetService.title,
        description: targetService.description || "No Description",
        qualifications: targetService.qualifications || "No Qualification",
        category: targetService.category,
        type: targetService.type,
        price: `${Number(targetService.price) / 1000}`,
        mentorid: targetService.mentorId,
        mentorname: targetService.mentor.user.name
    }

    return (

        <div className="relative mb-32 divide-y-4 divide-brand-100">
            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Service Details"}</div>
                    </div> 
                </div>
 
            </div>
            <div className="bg-white">
                <div className="py-8 px-2 md:px-4 md:w-9/12 lg:w-8/12 xl:w-7/12 space-y-2"> 

                    <ServiceDetailsCard serviceData={serviceData} actionsEnabled={user.role == "MENTOR"}/>

                    <div className="flex flex-row gap-1">
                        <div className="text-base font-semibold text-slate-800">{"Mentor"}</div>
                        <div className="text-sm font-medium text-slate-600">{targetService.mentor.user.name}</div>
                    </div>

                </div>

            </div>

        </div> 
    );
}