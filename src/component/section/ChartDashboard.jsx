import React, { useState, useEffect } from "react";
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
import { getGraphAPI } from "../../services/dashboardService";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartDashboard = () => {
  const [period, setPeriod]       = useState("all");
  const [days, setDays]           = useState("7");
  const [graphData, setGraphData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Buat array semua hari dalam range
  // contoh: days=7 → ["25 May", "26 May", ..., "31 May"]
  const generateDateRange = (totalDays) => {
    const dates = [];
    for (let i = totalDays - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      // Format sama dengan backend: "DD Mon" contoh "25 May"
      const label = date.toLocaleDateString("en-GB", {
        day:   "2-digit",
        month: "short",
      });
      dates.push(label);
    }
    return dates;
  };

  useEffect(() => {
    const fetchGraph = async () => {
      setIsLoading(true);
      try {
        const endDate   = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - parseInt(days) + 1);

        const formatDate = (d) => d.toISOString().split("T")[0];
        const typeMap    = { all: "both", income: "income", expense: "expense" };

        const response = await getGraphAPI({
          type:       typeMap[period] || "both",
          start_date: formatDate(startDate),
          end_date:   formatDate(endDate),
        });

        setGraphData(response.data.points || []);
      } catch (err) {
        console.error("Gagal memuat graph:", err);
        setGraphData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGraph();
  }, [period, days]);

  // ✅ Isi semua hari dalam range, hari tanpa data → 0
  const allLabels = generateDateRange(parseInt(days));

  // Buat map dari data backend: { "26 May": { income: 50000, expense: 0 } }
  const dataMap = {};
  graphData.forEach((point) => {
    dataMap[point.label] = {
      income:  point.income,
      expense: point.expense,
    };
  });

  // Cocokkan semua label dengan data backend
  // Jika tidak ada → isi 0
  const incomes  = allLabels.map((label) => dataMap[label]?.income  || 0);
  const expenses = allLabels.map((label) => dataMap[label]?.expense || 0);

  const getDatasets = () => {
    const datasets = [];
    if (period === "income" || period === "all") {
      datasets.push({
        label:           "Income",
        data:            incomes,
        backgroundColor: "#2948FF",
        borderRadius:    5,
      });
    }
    if (period === "expense" || period === "all") {
      datasets.push({
        label:           "Expense",
        data:            expenses,
        backgroundColor: "#D60000",
        borderRadius:    5,
      });
    }
    return datasets;
  };

  const chartData = {
    labels:   allLabels, // ← semua hari tampil
    datasets: getDatasets(),
  };

  const options = {
    responsive:          true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display:  period === "all",
        position: "bottom",
        labels:   { usePointStyle: true, boxWidth: 10 },
      },
    },
    scales: {
      y: {
        grid:        { drawBorder: false, color: "#F0F0F0" },
        ticks:       { color: "#B5B5B5", stepSize: 25000 },
        beginAtZero: true,
      },
      x: {
        grid:  { display: false },
        ticks: {
          color:         "#4F5665",
          maxTicksLimit: days === "30" ? 10 : 7,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow p-6 max-w-4xl mx-auto mt-10 max-md:p-4 max-md:mt-4 max-md:shadow-none">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-[#252733]">Income Chart</h2>

        <div className="flex gap-3">
          {/* Days dropdown */}
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="bg-[#F2F4F7] text-sm font-medium p-2 px-4 rounded-lg outline-none border-none cursor-pointer"
          >
            <option value="7">7 Days</option>
            <option value="30">30 Days</option>
          </select>

          {/* Type dropdown */}
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
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            Memuat data...
          </div>
        ) : (
          <Bar data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default ChartDashboard;