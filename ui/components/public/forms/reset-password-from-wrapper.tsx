import ResetPasswordForm from "@/ui/components/public/forms/reset-password-form";
import ResetPasswordFormAction from "@/actions/auth/reset-password-action"; 

export default function ResetPasswordFormWrapper({token, callbackURL}:{token:string, callbackURL:string}){
     return <ResetPasswordForm action={ResetPasswordFormAction.bind(null, { token, callbackURL })}/>;
}