'use client';

import Image from "next/image";

export default function HeaderLoading() { 
    return (
        <header className="bg-white border-b border-b-slate-300 transition-all  sticky top-0 inset-x-0 z-50 animate-pulse duration-300">
            <nav aria-label="Global" className="mx-auto  2xl:w-11/12  px-6 py-4 lg:px-8 text-sm text-slate-500 font-light">
            
                <div className="flex flex-row items-center justify-between gap-10">

                <div className="flex flex-row flex-1 w-full lg:flex-none lg:w-fit justify-between items-center">
                    <Image alt="" src={"/logo_full.svg"} width={184} height={35} />
                </div>

                <div className="hidden lg:flex lg:flex-1">
                    <ul className="flex flex-row gap-8 capitalize">

                    {
                        [111,2222,33333,444444]?.map((nav, idx)=>{
                            return <li key={`navitem-${idx}`} className="w-[50px] h-[20px] bg-slate-300 rounded"></li>
                        })
                    }

                    </ul>
                </div>

                <div className="hidden lg:flex flex-row items-center gap-6">

                </div>

                </div>

            </nav>
        </header>
    );
}
