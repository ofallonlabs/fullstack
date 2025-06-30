import { auth } from '@/lib/auth/auth';
import { headers } from 'next/headers';
import type { ServiceCardData } from "@/definition/public/data-types";
import SearchServices from "@/ui/components/public/services/search-services";
import { getAllServices } from "@/lib/db/services/mentor-services-service";

export default async function SearchSevicesContainer() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    let isAuthenticated : boolean = false;

    if(session){
        const user = session.user;
        if(user){
            isAuthenticated = true;
        }
    }


    const allServices : ServiceCardData[] = (await getAllServices() || []).map((service)=>{

        return {
            title: service.title,
            description: service.description || '',
            country: service.mentor.user.country || 'USA',
            language: 'English',
            link: isAuthenticated ? `/dashboard/services/details/${service.id}` : '/auth/login',
            avgratings: 4,
            reviews: 10,
            mentorid: service.mentor.id,
            mentorname: service.mentor.user.name,
            price: `${service.price}`
        }

    });

    return <SearchServices services={allServices}/>;
}
 