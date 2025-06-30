import ServiceForm from "@/ui/components/dashboard/forms/mentor/service-form";
import serviceFormAction, { ExtraType } from "@/actions/dashboard/mentor/service-form-action";
import { getMentor } from "@/lib/db/services/mentor-service";
import { CalendlyAuthTokenType, CalendlyEventListType } from "@/definition/CalendlyDefinition";
import { getEventTypes } from "@/lib/calendly/Calendly";

export default async function ServiceFormWrapper({formType, userId}:{ formType: ExtraType, userId: string }){
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
   
     return <ServiceForm events={eventsList} action={serviceFormAction.bind(null, formType)}/>;
}