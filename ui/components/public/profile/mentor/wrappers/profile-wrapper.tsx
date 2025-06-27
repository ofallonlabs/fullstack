import { getMentorbyId } from "@/lib/db/services/mentor-service";
import { getUserInformation } from "@/lib/db/services/users-service";
import type { MentorProfile } from "@/definition/public/data-types";
import Profile from "@/ui/components/public/profile/mentor/profile";
import ServiceCard from "@/ui/components/common/cards/service-card";
import { getMentorServices } from "@/lib/db/services/mentor-services-service";
import type { ServiceCardData } from "@/definition/public/data-types";

export default async function ProfileWrapper({mentorId} : {mentorId:number}){

    const mentor = await getMentorbyId(mentorId);
    if(!mentor) return null;
    
    const user = await getUserInformation(mentor.userId);
    if(!user) return null;

    const mentorServices : ServiceCardData[] = (await getMentorServices(mentor.id) || []).map((service)=>{

        return {
            title: service.title,
            description: service.description || '',
            country: user.country || 'USA',
            language: 'English',
            link: `/dashboard/services/details/${service.id}`,
            avgratings: 4,
            reviews: 10,
            mentorid: mentor.id,
            mentorname: user.name,
            price: `${service.price}`
        }

    });


    const profileData: MentorProfile = {
        image: user.image || "#",
        name: user.name || "",
        aboutme: mentor.aboutMe || "",
        country: user.country || "",
        job: mentor.currentJobTitle || "",
        tagline: mentor.tagline || "",
        website: user.externalURL || ""
    }
 
    return (

        <div  className="space-y-10 md:space-y-18 lg:space-y-24 pb-40">
            
            <Profile mentorData={profileData}/>

            <div className="space-y-4 md:px-10 lg:px-16 xl:px-24">
                <div className="text-slate-800 font-bold text-base px-4 md:px-0">
                    {"Services"}
                <div className="text-slate-500 font-normal text-sm">{"See the mentor`s services and apply/buy today!"}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">

                    {
                        mentorServices.map((serviceItem, idx)=>{
                            return(    
                                <ServiceCard key={`serviceItem-${idx}-card`} service={serviceItem}/>                              
                            );
                        })
                    }
                </div>
            </div>


        </div>    
    );

}