import React from "react";

const LoanRecordTable = () => {
  // Sample data - replace with your actual data
  const borrowings = [
    {
      id: 1,
      itemName: "Laptop Dell",
      quantity: 2,
      borrowerName: "John Doe",
      returnDate: "2024-02-01",
    },
    {
      id: 2,
      itemName: "Projector",
      quantity: 1,
      borrowerName: "Jane Smith",
      returnDate: "2024-02-03",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-[0px_7px_5px_rgba(0,0,0,0.3)]">
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-[#248A81]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Nama Barang
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Jumlah Barang
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Nama Peminjam
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Tanggal Pengembalian
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {borrowings.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.itemName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.borrowerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.returnDate}
                </td>
              </tr>
            ))}
            {borrowings.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  Tidak ada data peminjaman
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanRecordTable;
