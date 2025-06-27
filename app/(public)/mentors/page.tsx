import type { MentorCardData } from "@/definition/public/data-types";
import SearchMentors from "@/ui/components/public/mentors/search-mentors";
import { getAllMentors } from "@/lib/db/services/mentor-service";
import { getMentorServices } from "@/lib/db/services/mentor-services-service";
import { printError } from "@/utils/Utils";

export default async function SearchMentorsContainer() {

    const mentors = await getAllMentors() || [];
    let  allMentorsData : MentorCardData[] = [];

    try {

        allMentorsData =  await Promise.all(mentors.map(async (mentor)=>{
                const services = await getMentorServices(mentor.id) || [];

                const minServicePrice = services.reduce((acc, cur) => {
                    if(Number(cur.price) < acc) return Number(cur.price);
                    return acc;
                }, 0);

                return {
                    avatar: mentor.user.image || "#",
                    link: `/profile/${mentor.id}/${mentor.user.name}`,
                    country: mentor.user.country || 'USA',
                    language: 'English',
                    reviews: 10,
                    avgratings: 4,
                    mentorname: mentor.user.name,
                    mentortagline: mentor.tagline || '',
                    mentorid: mentor.id,
                    servicescount: `${services.length}`,
                    serviceminprice: `${minServicePrice}`,             
                }

        }));
 
    }catch (e : unknown){
        printError("SearchMentorsContainer - allMentorsData", e);
    }
    

    return <SearchMentors mentors={allMentorsData}/>;
}
 