"use client";

import React from "react";
import Profile from "../ui/Profile";
import { usePathname } from "next/navigation"; // Import usePathname

interface Props {
  namePage: string;
  name: string;
}
const Header: React.FC<Props> = ({ namePage, name }) => {
  const pathname = usePathname(); // Dapatkan path saat ini

  return (
    <div className="flex justify-between items-center rounded-xl bg-gradient-to-r from-[#006A65] to-[#5FBEB0] pr-5 shadow-[0px_6px_5px_rgba(0,0,0,0.3)] border-[2px] border-white">
      <div className="flex flex-col gap-3 text-white justify-center pl-5 bg-[url('/bg_header.svg')] w-[621px] h-[87px]">
        {pathname === "/" && <h2>Welcome back, {name}!</h2>}
        <h1 className="font-bold text-3xl">{namePage}</h1>
      </div>
      <Profile name={name} image="/ic_profile.svg" />
    </div>
  );
};

export default Header;
