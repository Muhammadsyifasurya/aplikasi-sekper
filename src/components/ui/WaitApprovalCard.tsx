import React from "react";
import { ChevronRight } from "lucide-react";

const ApprovalRequestDashboard = () => {
  const requestItems = [
    "Camera Canon",
    "Proyektor dan Kabel HDMI",
    "Printer",
    "Lensa Camera",
  ];

  return (
    <div className="bg-[#8BBBB8] py-3 px-20 max-w-2xl rounded-xl flex flex-col items-center gap-5 shadow-[0px_7px_5px_rgba(0,0,0,0.3)]">
      <h2 className="text-white font-semibold text-2xl tracking-wide">
        REQUEST MENUNGGU APPROVAL
      </h2>
      <div className="flex justify-center gap-4">
        <div className="bg-white/80 rounded-3xl p-4 w-52 flex flex-col items-center justify-center">
          <span className="text-6xl font-bold text-gray-800">25</span>
          <span className="text-xs text-gray-500 text-center mt-1">
            sedang menunggu approved
          </span>
        </div>

        <div className="space-y-2">
          {requestItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-3xl py-2 px-4 text-center text-sm text-gray-600 hover:bg-white transition-colors duration-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end w-full">
        <button className="flex items-center text-sm text-[#056F69] hover:text-gray-800 transition-colors duration-200">
          Selengkapnya
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ApprovalRequestDashboard;
