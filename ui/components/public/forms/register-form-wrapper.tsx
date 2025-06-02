import RegisterForm from "@/ui/components/public/forms/register-form";
import RegisterFormAction from "@/actions/auth/register-action";

export default function RegisterFormWrapper({callbackURL} : {callbackURL:string}){
     return <RegisterForm action={RegisterFormAction.bind(null, { callbackURL })}/>;
}