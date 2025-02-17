import Image from "next/image";
import { Stats } from "./stats-cards";

export const StatsCard = ({ stat }: { stat: Stats }) => {
  return (
    <div className="rounded-lg flex max-w-full p-4 justify-between shadow-[0px_4px_30px_0px_rgba(46,45,116,0.05)]">
      <div className="space-y-2">
        <h4 className="text-[#777980] leading-6 font-medium ">{stat.label}</h4>
        <h2 className="text-[#1D1F2C] font-semibold text-3xl">{stat.value}</h2>
        <h5 className="text-[#858D9D] leading-5 text-sm">{stat.subLabel}</h5>
      </div>
      <div>
        <Image className="flex items-start" src={stat.icon} alt="Icon" />
      </div>
    </div>
  );
};
