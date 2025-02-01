import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  title: string;
  value: number;
}

const StatsOverview: React.FC<Props> = ({ icon, title, value }) => {
  return (
    <div className="bg-[#ABCDC9] w-fit flex rounded-2xl overflow-hidden border-[1px] border-[#267F7A] shadow-[0px_5px_5px_rgba(0,0,0,0.4)]">
      <div className="bg-white p-4 flex items-cente">
        <Image src={icon} alt="icon peminjam" width={30} height={30} />
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="font-semibold text-[12px]">{title}</h1>
        <span className="text-xl font-semibold">{value}</span>
      </div>
    </div>
  );
};

export default StatsOverview;
