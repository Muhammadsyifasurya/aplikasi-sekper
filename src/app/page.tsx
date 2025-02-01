"use client";

import StatsOverview from "@/components/ui/StatsOverview";
import LoanRecordTable from "@/components/ui/LoanRecordTable";
import NotificationCard from "@/components/ui/NotificationCard";
import StatisticLineCart from "@/components/ui/StatisticLineCart";
import Header from "@/components/layouts/Header";
import { useAuth } from "@/context/AuthContext";
import WaitApprovalCard from "@/components/ui/WaitApprovalCard";

export default function Home() {
  const { user } = useAuth();
  const cardItems = [
    { icon: "/ic_peminjam.svg", title: "DATA PEMINJAM", value: 24 },
    { icon: "/ic_ruang.svg", title: "DATA RUANG", value: 10 },
    { icon: "/ic_ruang_terpakai.svg", title: "RUANG TERPAKAI", value: 4 },
  ];

  return (
    <>
      <section className="flex flex-col gap-10 bg-gradient-to-r pl-[25%] from-[#FAF9F9] to-[#EAF6F6] w-full min-h-screen z-10 p-16">
        <Header namePage="DASHBOARD" name={user?.name || "Guest"} />

        <section className="flex gap-14 justify-center">
          {cardItems.map((item, index) => (
            <StatsOverview
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
            />
          ))}
        </section>
        {user?.role === "admin" ? (
          <>
            <StatisticLineCart />
            <div className="flex justify-between">
              <div className="flex flex-col gap-10">
                <LoanRecordTable />
                <LoanRecordTable />
              </div>

              <div className="bg-[#8BBBB8] h-full w-fit rounded-xl flex flex-col items-center py-4 px-6 shadow-[0px_7px_5px_rgba(0,0,0,0.3)]">
                <h1 className="w-[180px] text-center mb-5 font-bold">
                  REQUEST APPROVAL PEMINJAMAN
                </h1>
                <NotificationCard
                  peminjam="Abdul Khohir"
                  barang="Camera Sony"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-16 items-center">
            <WaitApprovalCard />
            <div className="flex flex-col gap-14 text-[#248A81] font-semibold">
              <div className="flex flex-col gap-3">
                <h1>Barang Yang Dipinjam</h1>
                <LoanRecordTable />
              </div>
              <div className="flex flex-col gap-3">
                <h1>Ruang yang Akan Digunakan</h1>
                <LoanRecordTable />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
