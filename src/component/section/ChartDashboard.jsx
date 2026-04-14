import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const ChartDashboard = () => {
  const [period, setPeriod] = useState("all");

  const dummyData = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    income: [13000, 1000, 90000, 32000, 45000, 23000, 14000],
    expense: [20000, 55000, 66000, 24000, 7000, 63000, 52000],
  };

  const getDatasets = () => {
    const datasets = [];

    if (period === "income" || period === "all") {
      datasets.push({
        label: "Income",
        data: dummyData.income,
        backgroundColor: "#2948FF", // Biru
        borderRadius: 5,
      });
    }

    // Jika pilih Expense atau All, masukkan data Expense (Merah)
    if (period === "expense" || period === "all") {
      datasets.push({
        label: "Expense",
        data: dummyData.expense,
        backgroundColor: "#D60000", // Merah
        borderRadius: 5,
      });
    }

    return datasets;
  };

  const chartData = {
    labels: dummyData.labels,
    datasets: getDatasets(),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // Tampilkan legend hanya jika mode "All" agar user tahu warna merah/biru itu apa
      legend: {
        display: period === "all",
        position: "bottom",
        labels: { usePointStyle: true, boxWidth: 10 },
      },
    },
    scales: {
      y: {
        grid: { drawBorder: false, color: "#F0F0F0" },
        ticks: { color: "#B5B5B5", stepSize: 25000 },
        beginAtZero: true,
      },
      x: {
        grid: { display: false },
        ticks: { color: "#4F5665" },
      },
    },
  };

  return (
    <div className="bg-white shadow p-6 max-w-4xl mx-auto mt-10 max-md:p-4 max-md:mt-4 max-md:shadow-none">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-[#252733]">Income Chart</h2>

        <div className="flex gap-3">
          {/* Dropdown Waktu (Static sample) */}
          <select className="bg-[#F2F4F7] text-sm font-medium p-2 px-4 rounded-lg outline-none border-none cursor-pointer">
            <option>7 Days</option>
          </select>

          {/* Dropdown Filter Data */}
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-[#F2F4F7] text-sm font-medium p-2 px-4 rounded-lg outline-none border-none cursor-pointer"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="relative h-118 max-md:h-64">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};
export default ChartDashboard;
