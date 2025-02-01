"use client";
import React from "react";
import Image from "next/image";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Searchbar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex items-center w-full max-w-[226px] justify-between gap-4 border-[2px] border-black p-2 rounded-xl">
      <button title="search" className="cursor-pointer pl-2">
        <Image src="/ic_search.svg" alt="icon search" width={16} height={16} />
      </button>
      <input
        type="text"
        name="name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="flex bg-transparent outline-none w-full"
      />
    </div>
  );
};

export default Searchbar;
