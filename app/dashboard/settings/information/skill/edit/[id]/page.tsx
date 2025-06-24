import SkillsFormWrapper from "@/ui/components/dashboard/forms/mentee/wrappers/skills-form-wrapper";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { getMentee } from "@/lib/db/services/mentee-service";

export default async function EditSkillsPage({ params }: { params: Promise<{ id: string }> }){
    const { id } = await params;

    if(!id) return null;

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        return <div>Not authenticated</div>;
    }

    const user = session.user;
    if(!user || user.role == "MENTOR") return null;

    const targetId : number | undefined = (await getMentee(user.id))?.id;

    if(!targetId) return null;


    return (

        <div className="relative mb-32 divide-y-4 divide-brand-100">
            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Mentee Information"}</div>
                    </div> 
                </div>
 
            </div>
            <div className="bg-white">
                <div className="py-8 px-2 md:px-4 md:w-9/12 lg:w-8/12 xl:w-7/12">
                    <SkillsFormWrapper formType={{method:"EDIT", id: id}} menteeId={targetId} />
                </div>

            </div>

        </div> 
    );
}