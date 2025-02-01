import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BorrowingChart = () => {
  const data = [
    { month: "Jan-23", normalDay: 35.7, doubleDate: 0 },
    { month: "Feb-23", normalDay: 22.8, doubleDate: 0 },
    { month: "Mar-23", normalDay: 21.4, doubleDate: 0 },
    { month: "Apr-23", normalDay: 24.4, doubleDate: 0 },
    { month: "May-23", normalDay: 82.3, doubleDate: 0 },
    { month: "Jun-23", normalDay: 24.4, doubleDate: 0 },
    { month: "Jul-23", normalDay: 20.2, doubleDate: 0 },
    { month: "Aug-23", normalDay: 43.4, doubleDate: 0 },
    { month: "Sep-23", normalDay: 58.7, doubleDate: 0 },
    { month: "Oct-23", normalDay: 75.7, doubleDate: 0 },
    { month: "Nov-23", normalDay: 16.3, doubleDate: 0 },
    { month: "Dec-23", normalDay: 53.5, doubleDate: 0 },
    { month: "Jan-24", normalDay: 22.8, doubleDate: 0 },
    { month: "Feb-24", normalDay: 6.5, doubleDate: 0 },
    { month: "Mar-24", normalDay: 84.1, doubleDate: 0 },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-medium mb-4">
        Grafik Peminjaman Ruang dan Barang
      </h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="normalDay"
              name="Normal Day"
              stroke="#ff7979"
              strokeWidth={2}
              dot={{ stroke: "#ff7979", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="doubleDate"
              name="Double Date"
              stroke="#ff5252"
              strokeWidth={2}
              dot={{ stroke: "#ff5252", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BorrowingChart;
