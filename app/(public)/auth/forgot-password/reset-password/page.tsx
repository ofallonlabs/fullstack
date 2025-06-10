'use client';

import { Suspense } from "react";
import ResetPasswordPage from "@/ui/pages/reset-password/reset-password-page";

export default function Home() { 
   
  return (
    <Suspense fallback={<div></div>}>
      <ResetPasswordPage/>
    </Suspense>
  );

}
