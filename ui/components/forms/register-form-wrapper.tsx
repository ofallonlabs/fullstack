import RegisterForm from "@/ui/components/forms/register-form";
import RegisterFormAction from "@/actions/auth/register-action";

export default function RegisterFormWrapper(){
     return <RegisterForm action={RegisterFormAction}/>;
}