import { StatisticsType } from "@/definition/dashboard/common/common-types";
import { classNames } from "@/utils/Utils";

export default function Statistics({stats}:{stats:StatisticsType[]}){

    return (
        stats.map((stat) => (
            <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
            >
            <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
            <dd
                className={classNames(
                stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                'text-xs font-medium',
                )}
            >
                {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{stat.value}</dd>
            </div>
        ))        
    );

}