import ServiceForm from "@/ui/components/dashboard/forms/mentor/service-form";
import serviceFormAction, { ExtraType } from "@/actions/dashboard/mentor/service-form-action";
import { getMentor } from "@/lib/db/services/mentor-service";
import { CalendlyAuthTokenType } from "@/definition/CalendlyDefinition";
import { getEventTypes } from "@/lib/calendly/Calendly";

export default async function ServiceFormWrapper({formType, userId}:{ formType: ExtraType, userId: string }){

     const mentor = await getMentor(userId);
     if(!mentor) return null;

     const calendlyCred = mentor.calendlyCred  as Partial<CalendlyAuthTokenType> | undefined;
     if(!calendlyCred) return null;

     if(calendlyCred.access_token && calendlyCred.refresh_token && calendlyCred.owner){
          const events =await getEventTypes(calendlyCred.access_token, calendlyCred.refresh_token, calendlyCred.owner);
          console.log(events ? JSON.stringify(events, null, 2) : "NO EVENT TYPES FOUND");
     }else{
          return null;
     }
   
     return <ServiceForm action={serviceFormAction.bind(null, formType)}/>;
}