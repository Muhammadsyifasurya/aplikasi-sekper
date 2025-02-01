"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname(); // Ambil URL yang sedang aktif
  return (
    <>
      <nav className="w-[20%] bg-gradient-to-b from-[#27807A] to-[#9EC4C1] z-20 h-screen flex justify-center fixed pt-[54px]">
        <ul className="flex flex-col gap-7 font-semibold text-[18px]">
          <li className="flex justify-center">
            <Image
              src="/ic_logo.svg"
              alt="logo"
              width="161"
              height="65"
              className="mb-4"
            />
          </li>
          <li>
            <Link
              href="/"
              className={`flex gap-3 py-3 px-6 rounded-2xl transition-all ease-in-out duration-300 ${
                pathname === "/" ? "bg-[#93C0CA]" : "hover:bg-[#93C0CA]"
              }`}
            >
              <Image
                src="/ic_dashboard.svg"
                alt="dashboard"
                width="20"
                height="20"
              />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/kelola-peminjaman"
              className={`flex gap-3 py-3 px-6 rounded-2xl transition-all ease-in-out duration-300 ${
                pathname === "/kelola-peminjaman"
                  ? "bg-[#93C0CA]"
                  : "hover:bg-[#93C0CA]"
              }`}
            >
              <Image src="/ic_kelola.svg" alt="kelola" width="20" height="20" />
              Kelola Peminjaman
            </Link>
          </li>
          <li>
            <Link
              href="/manage-ruangan"
              className={`flex gap-3 py-3 px-6 rounded-2xl transition-all ease-in-out duration-300 ${
                pathname === "/manage-ruangan"
                  ? "bg-[#93C0CA]"
                  : "hover:bg-[#93C0CA]"
              }`}
            >
              <Image src="/ic_manage.svg" alt="manage" width="20" height="20" />
              Manage Ruangan
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
