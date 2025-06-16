import ServiceForm from "@/ui/components/dashboard/forms/mentor/service-form";
import serviceFormAction, { ExtraType } from "@/actions/dashboard/mentor/service-form-action";

export default function ProfileFormWrapper(formType: ExtraType){
     return <ServiceForm action={serviceFormAction.bind(null, formType)}/>;
}