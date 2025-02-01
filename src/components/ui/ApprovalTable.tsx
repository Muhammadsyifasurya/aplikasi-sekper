"use client";

import React, { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import FileUploadForm from "../layouts/ValidationPopup";

interface ApprovalItem {
  id: number;
  namaBarang: string;
  keperluan: string;
  peminjam: string;
  divisi: string;
  detail: string;
  status: "SETUJUI" | "TOLAK" | "PENDING";
}

interface Props {
  searchQuery: string;
}

const ApprovalTable: React.FC<Props> = ({ searchQuery }) => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State untuk mengontrol popup form
  const [approvalItems, setApprovalItems] = useState<ApprovalItem[]>(
    Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      namaBarang: `Barang ${i + 1}`,
      keperluan: "Keperluan " + (i + 1),
      peminjam: "Peminjam " + (i + 1),
      divisi: "Divisi " + (i + 1),
      detail: "Detail barang " + (i + 1),
      status: i % 3 === 0 ? "SETUJUI" : i % 3 === 1 ? "TOLAK" : "PENDING",
    }))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredItems = useMemo(() => {
    return approvalItems.filter((item) =>
      item.namaBarang.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, approvalItems]);

  const totalPages = Math.ceil(approvalItems.length / itemsPerPage);

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

  const handleFileUploadSubmit = (file: File | null, details: string) => {
    console.log("File uploaded:", file);
    console.log("Details:", details);
    // Lakukan sesuatu dengan file dan detail, misalnya simpan ke state atau kirim ke API
    setIsPopupVisible(false); // Tutup popup setelah submit
  };

  const renderStatusButton = (item: ApprovalItem) => {
    if (item.status === "SETUJUI") {
      return (
        <button
          className="bg-blue-600 text-white w-[125px] px-4 py-2 rounded-xl text-sm font-medium"
          onClick={() => setIsPopupVisible(true)} // Tampilkan popup saat tombol diklik
        >
          Barang Siap
        </button>
      );
    }

    if (item.status === "TOLAK") {
      return (
        <button className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
          Tidak Tersedia
        </button>
      );
    }

    return (
      <div className="relative">
        <button
          onClick={() =>
            setOpenDropdownId(openDropdownId === item.id ? null : item.id)
          }
          className="bg-white border border-gray-300 px-3 py-2 rounded-xl text-sm font-medium flex justify-center items-center gap-[3px] w-[125px]"
        >
          Pilih Satu
          <ChevronDown
            size={14}
            className={`transform transition-transform duration-200 ${
              openDropdownId === item.id ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdownId === item.id && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <button
              onClick={() => handleStatusChange(item.id, "SETUJUI")}
              className="w-full text-center px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 first:rounded-t-lg"
            >
              Tersedia
            </button>
            <button
              onClick={() => handleStatusChange(item.id, "TOLAK")}
              className="w-full text-center px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 last:rounded-b-lg border-t"
            >
              Tidak Tersedia
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full overflow-y-auto rounded-xl pb-10 shadow-[0px_6px_5px_rgba(0,0,0,0.3)]">
      <table className="w-full">
        <thead>
          <tr className="bg-[#93C0CA]">
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              No.
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Nama Barang
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Keperluan
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Peminjam
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Divisi
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Detail
            </th>
            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
              Status Approval
            </th>
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
              <td className="px-4 py-3 text-sm text-center text-gray-900">
                {item.id}
              </td>
              <td className="px-4 py-3 text-sm text-center text-gray-900">
                {item.namaBarang}
              </td>
              <td className="px-4 py-3 text-sm text-center text-gray-900">
                {item.keperluan}
              </td>
              <td className="px-4 py-3 text-sm text-center text-gray-900">
                {item.peminjam}
              </td>
              <td className="px-4 py-3 text-sm text-center text-gray-900">
                {item.divisi}
              </td>
              <td className="px-4 py-3 text-sm text-center text-gray-900">
                {item.detail}
              </td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center">
                  {renderStatusButton(item)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup Form */}
      {isPopupVisible && (
        <FileUploadForm
          title="Validasi Barang Siap"
          onSubmit={handleFileUploadSubmit}
          onClose={() => setIsPopupVisible(false)} // Tambahkan prop onClose untuk menutup popup
        />
      )}

      {/* Pagination */}
      {approvalItems.length >= 11 && (
        <div className="flex justify-center items-center gap-2 mt-4">
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

export default ApprovalTable;
