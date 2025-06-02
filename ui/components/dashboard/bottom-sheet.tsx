import Link from "next/link";
import { JSX } from "react";
import { classNames } from "@/utils/Utils";

export type BottomSheetNavigation = {
    name: string;
    href: string;
    icon: ({ style }: {
        style?: string;
    }) => JSX.Element;
    current: boolean;
}


export default function BottomSheet({navigation}: {navigation: BottomSheetNavigation[]}){
    return (
                <div className="sticky bottom-0 inset-x-0 bg-white shadow z-50">
                    <div className=" grid grid-cols-5 border-t border-t-gray-200 h-fit w-full sm:hidden">

                          {
                            navigation.map((navItem, idx) => {
                                return (
                                    <Link key={`bottomSheetNavitem-${navItem.name}-${idx}`} href={navItem.href} 
                                        className={classNames(navItem.current  ? 'border-t-[2px] border-t-brand-500' : '', 'col-span-1 py-2  mx-2')}>
                                        <div className="flex flex-col gap-1.5 items-center justify-between">
                                            <navItem.icon style="text-brand-600"/>
                                            <div className={classNames(navItem.current  ? 'text-brand-600' : 'text-gray-800', 'text-center text-xs font-bold')}>{navItem.name}</div>
                                        </div>
                                    </Link>
                                );
                            })
                          }
                                                    
                    </div>
                 </div>
        
    );
}