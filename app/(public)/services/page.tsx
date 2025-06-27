import type { ServiceCardData } from "@/definition/public/data-types";
import SearchServices from "@/ui/components/public/services/search-services";
import { getAllServices } from "@/lib/db/services/mentor-services-service";

export default async function SearchSevicesContainer() {

    const allServices : ServiceCardData[] = (await getAllServices() || []).map((service)=>{

        return {
            title: service.title,
            description: service.description || '',
            country: service.mentor.user.country || 'USA',
            language: 'English',
            link: `/dashboard/services/details/${service.id}`,
            avgratings: 4,
            reviews: 10,
            mentorid: service.mentor.id,
            mentorname: service.mentor.user.name,
            price: `${service.price}`
        }

    });

    return <SearchServices services={allServices}/>;
}
 