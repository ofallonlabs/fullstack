import SigninForm from "@/ui/components/public/forms/signin-form";
import SigninFormAction from "@/actions/auth/signin-action";

export default function SigninFormWrapper({callbackURL} : {callbackURL:string}){
     return <SigninForm action={SigninFormAction.bind(null, { callbackURL })}/>;
}