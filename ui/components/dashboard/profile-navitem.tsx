'use client';

import { useSession } from "@/lib/auth/auth-client";
import { classNames } from "@/utils/Utils";
import Image from "next/image";
import SignoutButton from "@/ui/elements/signout-button";
import { LogoutIcon } from "@/ui/svgs";

export default function ProfileNavItem(){
  const { data , isPending } = useSession();

  const email = data?.user?.email || null;
  const fullname = data?.user?.name || null;
  const avatarURL = data?.user?.image || null;

    return (
        <div className="flex flex-row items-center gap-2 px-2 py-4 border-t border-t-gray-200">
          <div className="flex-none w-fit">
            <div className="relative flex max-w-xs items-center rounded-full bg-brand-600 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 focus:outline-hidden">
              {
                avatarURL 
                ? <Image className="object-center object-contain w-[40px] h-[40px] aspect-square rounded-full bg-slate-400" alt={`${!isPending && fullname ? fullname : 'user'} profile image`} src={avatarURL} width={24} height={24}/>
                : <div className="object-center object-contain w-[40px] h-[40px] aspect-square rounded-full bg-slate-400"></div>
              }             
              <span className="absolute right-0 bottom-0 block size-2.5 rounded-full bg-brand-400 ring-2 ring-white" /> 
            </div>            
          </div>
          <div className="flex-1 text-left flex flex-col items-stretch justify-center">
            {
                !isPending && fullname
                ? <div className="font-semibold text-gray-800  text-sm line-clamp-1 w-[180px]">{fullname}</div>
                : <div className="font-semibold bg-gray-300/70  text-sm line-clamp-1 w-[70px] h-[12px] rounded animate-pulse duration-200"></div>
            }
            {
                !isPending && email
                ? <div className="font-normal text-gray-600  text-xs line-clamp-1 w-[180px]">{email}</div>
                : <div className="font-normal bg-gray-300/70  text-xs line-clamp-1 w-[80px] mt-2 h-[12px] rounded animate-pulse duration-200"></div>
            }            
          </div>
          <div className="flex-none w-fit hover:bg-slate-300/30 rounded-full hover:cursor-pointer p-2 transition-colors duration-200">
            <SignoutButton>
              <LogoutIcon
                  style={classNames('size-6 shrink-0')}
              />
            </SignoutButton>          
          </div> 
        </div>        
    );
}