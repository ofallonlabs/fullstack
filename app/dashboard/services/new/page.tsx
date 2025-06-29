import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import ServiceFormWrapper from "@/ui/components/dashboard/forms/mentor/wrappers/service-form-wrapper";

export default async function NewServicePage(){

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        return <div>Not authenticated</div>;
    }

    const user = session.user;
    if(!user) return null;



    return (

        <div className="relative mb-32 divide-y-4 divide-brand-100">
            <div className="pt-4 sticky top-[65px] sm:top-[60px] lg:top-0 inset-x-0 bg-white overflow-x-auto -z-0">

                <div className="text-left px-2 md:px-4 mb-4">
                    <div className="text-gray-800  font-bold text-xl xl:text-3xl flex flex-row gap-1 items-center justify-start">
                        <div>{"Create"}</div>
                    </div> 
                </div>
 
            </div>
            <div className="bg-white">
                <div className="py-8 px-2 md:px-4 md:w-9/12 lg:w-8/12 xl:w-7/12">
                    <ServiceFormWrapper formType={{method:"ADD"}} userId={user.id} />
                </div>

            </div>

        </div> 
    );
}