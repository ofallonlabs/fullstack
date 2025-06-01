import ResetPasswordForm from "@/ui/components/forms/reset-password-form";;
import ResetPasswordFormAction from "@/actions/auth/reset-password-action"; 

export default function ResetPasswordFormWrapper({token}:{token:string}){
     return <ResetPasswordForm action={ResetPasswordFormAction.bind(null, { token })}/>;
}