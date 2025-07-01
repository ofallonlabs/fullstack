import EditServiceForm from "@/ui/components/dashboard/forms/mentor/edit-service-form";
import serviceFormAction, { ExtraType } from "@/actions/dashboard/mentor/service-form-action";
import { getMentor } from "@/lib/db/services/mentor-service";
import { CalendlyAuthTokenType, CalendlyEventListType } from "@/definition/CalendlyDefinition";
import { getEventTypes } from "@/lib/calendly/Calendly";
import { getMentorService } from "@/lib/db/services/mentor-services-service";

export default async function EditServiceFormWrapper({formType, userId}:{ formType: ExtraType, userId: string }){

    if(formType.method != "EDIT") return null;

     let eventsList : CalendlyEventListType[] = [];
     const mentor = await getMentor(userId);
     if(!mentor) return null;

     const calendlyCred = mentor.calendlyCred  as Partial<CalendlyAuthTokenType> | undefined;
     if(!calendlyCred) return null;

     if(calendlyCred.access_token && calendlyCred.refresh_token && calendlyCred.owner){
          const events =await getEventTypes(calendlyCred.access_token, calendlyCred.refresh_token, calendlyCred.owner, userId);
          eventsList = events?.data.collection.map((event)=> ({name: event.name, booking_url: event.scheduling_url})) || [];
     }else{
          return null;
     }

     const targetService = await getMentorService(mentor.id, +formType.id);

     if(!targetService) return null;
   
     return <EditServiceForm events={eventsList} action={serviceFormAction.bind(null, formType)} serviceData={
        {
            title: targetService.title,
            category: targetService.category,
            price: Number(targetService.price) || 0,
            needApproval: targetService.needApproval,
            type: targetService.type,
            description: targetService.description || undefined,
            qualifications: targetService.qualifications|| undefined
        }
     }/>;
}