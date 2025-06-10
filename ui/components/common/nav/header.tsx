"use client";
import { useSession } from "@/lib/auth/auth-client";
import HeaderAuth from "@/ui/components/common/nav/auth/header";
import HeaderPublic from "@/ui/components/common/nav/public/header";
import HeaderLoading from "@/ui/components/common/nav/header-loading";

export default function Header({ children, }: { children: React.ReactNode }) {

  const { data , isPending } = useSession();


  if(isPending) return <HeaderLoading/>;

  return !data ? <HeaderPublic/> : <HeaderAuth>{children}</HeaderAuth>;
 
  
}
