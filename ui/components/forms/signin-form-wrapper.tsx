import SigninForm from "@/ui/components/forms/signin-form";
import SigninFormAction from "@/actions/auth/signin-action";

export default function SigninFormWrapper(){
     return <SigninForm action={SigninFormAction}/>;
}