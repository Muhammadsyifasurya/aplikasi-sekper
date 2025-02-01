"use client";
import ApprovalTable from "@/components/ui/ApprovalTable";
import Header from "@/components/layouts/Header";
import Searchbar from "@/components/ui/SearchBar";
import React, { useState } from "react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <section className="flex flex-col gap-10 bg-gradient-to-r pl-[25%] from-white to-[#E4F5F6] w-full min-h-screen z-10 p-16">
        <Header namePage="KELOLA PEMINJAMAN BARANG" />
        <div>
          <div className="flex justify-end gap-5 mb-10">
            <button className="border-[2px] border-black rounded-xl py-2 px-5 font-semibold text-sm hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-300">
              INPUT REQUEST
            </button>
            <Searchbar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <ApprovalTable searchQuery={searchQuery} />
        </div>
      </section>
    </>
  );
};

export default Page;
