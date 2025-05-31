import ForgotPasswordForm from "@/ui/components/forms/forgot-password-form";
import ForgotPasswordFormAction from "@/actions/auth/forgot-password-action";

export default function ForgotPasswordFormWrapper(){
     return <ForgotPasswordForm action={ForgotPasswordFormAction}/>;
}