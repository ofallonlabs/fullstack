import { classNames } from "@/utils/Utils";
import Image from "next/image";
import SignoutButton from "@/ui/elements/signout-button";
import { LogoutIcon } from "@/ui/svgs";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth"; 

export default async function ProfileNavItem(){

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return null;
    }   

    const user = session.user;

    return (
        <div className="flex flex-row items-center gap-2 px-2 py-4 border-t border-t-gray-200">
          <div className="flex-none w-fit">
            <div className="relative flex max-w-xs items-center rounded-full bg-brand-600 text-sm text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 focus:outline-hidden">
              {
                user?.image 
                ? <Image className="object-center object-contain w-[40px] h-[40px] aspect-square rounded-full bg-slate-400" alt={`${user?.name ? user?.name : 'user'} profile image`} src={user?.image} width={24} height={24}/>
                : <div className="object-center object-contain w-[40px] h-[40px] aspect-square rounded-full bg-slate-400"></div>
              }             
              <span className="absolute right-0 bottom-0 block size-2.5 rounded-full bg-brand-400 ring-2 ring-white" /> 
            </div>            
          </div>
          <div className="flex-1 text-left flex flex-col items-stretch justify-center">
            {
                user?.name
                ? <div className="font-semibold text-gray-800  text-sm line-clamp-1 w-[180px]">{user.name}</div>
                : <div className="font-semibold bg-gray-300/70  text-sm line-clamp-1 w-[70px] h-[12px] rounded animate-pulse duration-200"></div>
            }
            {
                user?.email
                ? <div className="font-normal text-gray-600  text-xs line-clamp-1 w-[180px]">{user.email}</div>
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