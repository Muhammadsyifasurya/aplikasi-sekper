"use client";

import React, { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

interface ApprovalItem {
  id: number;
  namaRuang: string;
  lokasi: string;
  kapasitas: number;
  jumlah: number;
  status: "READY" | "MAINTENANCE" | "PENDING";
}

interface Props {
  searchQuery: string;
}

const ApprovalRoomTable: React.FC<Props> = ({ searchQuery }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [actionDropdownId, setActionDropdownId] = useState<number | null>(null);
  const [approvalItems, setApprovalItems] = useState<ApprovalItem[]>(() =>
    Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      namaRuang: `Ruang ${i + 1}`,
      lokasi: `Gedung ${Math.ceil((i + 1) / 3)}`,
      kapasitas: Math.floor(Math.random() * 100) + 10,
      jumlah: Math.floor(Math.random() * 10) + 1,
      status: i % 3 === 0 ? "READY" : i % 3 === 1 ? "MAINTENANCE" : "PENDING",
    }))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ✅ Gunakan useMemo untuk filter dan pagination
  const filteredItems = useMemo(() => {
    return approvalItems.filter((item) =>
      item.namaRuang.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, approvalItems]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = useMemo(() => {
    return filteredItems.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [currentPage, filteredItems]);

  const handleStatusChange = (
    id: number,
    newStatus: ApprovalItem["status"]
  ) => {
    setApprovalItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
    setOpenDropdownId(null);
  };

  const handleDelete = (id: number) => {
    setApprovalItems((items) => items.filter((item) => item.id !== id));
    setActionDropdownId(null);
  };

  const renderStatusButton = (item: ApprovalItem) => {
    if (item.status !== "PENDING") {
      return (
        <span
          className={`px-4 py-2 rounded-xl w-[125px] text-sm font-medium ${
            item.status === "READY"
              ? "bg-blue-500 text-white"
              : "bg-orange-500 text-white"
          }`}
        >
          {item.status === "READY" ? "Ready" : "Maintenance"}
        </span>
      );
    }
    return (
      <div className="relative">
        <button
          onClick={() =>
            setOpenDropdownId(openDropdownId === item.id ? null : item.id)
          }
          className="bg-white px-3 py-2 rounded-xl text-sm font-medium flex justify-center items-center gap-2 border-[2px] border-gray-200 w-[125px]"
        >
          Pilih Status
          <ChevronDown
            size={14}
            className={`transform transition-transform duration-200 ${
              openDropdownId === item.id ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdownId === item.id && (
          <div className="absolute top-full left-0 mt-1 w-[120px] bg-white border rounded-lg shadow-lg z-10">
            <button
              onClick={() => handleStatusChange(item.id, "READY")}
              className="w-full px-4 py-2 text-sm hover:bg-gray-100"
            >
              Ready
            </button>
            <button
              onClick={() => handleStatusChange(item.id, "MAINTENANCE")}
              className="w-full px-4 py-2 text-sm hover:bg-gray-100 border-t"
            >
              Maintenance
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full overflow-y-auto rounded-xl pb-10 shadow-[0px_6px_5px_rgba(0,0,0,0.3)]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#93C0CA] text-white">
            {[
              "No.",
              "Nama Ruangan",
              "Lokasi Gedung",
              "Maks. Kapasitas",
              "Jumlah",
              "Status",
              "Action",
            ].map((text, index) => (
              <th
                key={index}
                className="px-4 py-3 text-center text-sm font-medium"
              >
                {text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item, index) => (
            <tr
              key={item.id}
              className={`${
                index % 2 === 0 ? "bg-blue-50" : "bg-white"
              } border-b border-gray-200`}
            >
              <td className="px-4 py-3 text-sm text-center">{item.id}</td>
              <td className="px-4 py-3 text-sm text-center">
                {item.namaRuang}
              </td>
              <td className="px-4 py-3 text-sm text-center">{item.lokasi}</td>
              <td className="px-4 py-3 text-sm text-center">
                {item.kapasitas}
              </td>
              <td className="px-4 py-3 text-sm text-center">{item.jumlah}</td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center">
                  {renderStatusButton(item)}
                </div>
              </td>
              <td className="px-4 py-3 text-center relative">
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      setActionDropdownId(
                        actionDropdownId === item.id ? null : item.id
                      )
                    }
                    className="bg-white px-3 py-2 rounded-xl text-sm font-medium flex justify-center items-center gap-2 border-[2px] border-gray-200 w-[120px]"
                  >
                    Pilih Satu{" "}
                    <ChevronDown
                      size={14}
                      className={`transform transition-transform duration-200 ${
                        actionDropdownId === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {actionDropdownId === item.id && (
                  <div className="absolute top-[90%] left-0 right-0 mx-auto w-[120px] bg-white border rounded-lg shadow-lg z-10">
                    <button className="w-full px-4 py-2 text-sm hover:bg-gray-100">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="w-full px-4 py-2 text-sm hover:bg-gray-100 border-t"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {filteredItems.length > itemsPerPage && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ApprovalRoomTable;
