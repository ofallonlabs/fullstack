import EducationFormWrapper from "@/ui/components/dashboard/forms/mentee/wrappers/education-form-wrapper";

export default function EducationPage(){
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
                    <EducationFormWrapper/>
                </div>

            </div>

        </div> 
    );
}