import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setDashboard } from "../../store/slices/authSlice";
import { getDashboardAPI } from "../../services/dashboardService";
import CardIncome from "../Card/CardIncome";
import ChartDashboard from "../section/ChartDashboard";
import toast from "react-hot-toast";

function IncomeChartDashboard() {
  const dispatch      = useAppDispatch();
  const { dashboard } = useAppSelector((state) => state.auth);

  // Fetch dashboard dari API
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await getDashboardAPI();
        dispatch(setDashboard(response.data));
      } catch (err) {
        toast.error("Gagal memuat dashboard");
        console.error(err);
      }
    };
    fetchDashboard();
  }, [dispatch]);

  return (
    <section className="text-medium">
      <div className="grid grid-cols-2 md:flex md:justify-between justify-center max-md:grid max-md:gap-0 max-md:px-4">
        <div className="flex flex-col max-md:justify-self-start max-md:w-full col-span-2 md:flex-row gap-4 md:justify-between items-center md:items-stretch">
          {/* Dari Redux state dashboard */}
          <CardIncome
            icon="/image/balance.svg"
            title="Balance"
            text={`Rp${(dashboard.balance || 0).toLocaleString("id-ID")}`}
            detail="+2%"
            arrow="/image/ArrowRise.svg"
            day="3 Days Ago"
          />
        </div>
        <div>
          <CardIncome
            icon="/image/income-withdraw.svg"
            title="Income"
            text={`Rp${(dashboard.total_income || 0).toLocaleString("id-ID")}`}
            detail="+11.01%"
            arrow="/image/ArrowRise.svg"
          />
        </div>
        <div>
          <CardIncome
            icon="/image/expense-withdraw.svg"
            title="Expense"
            text={`Rp${(dashboard.total_expense || 0).toLocaleString("id-ID")}`}
            detail="-5.06%"
            arrow="/image/arrowDown.svg"
          />
        </div>
      </div>

      <div className="shadow mt-5 py-4 md:h-20.25 w-full flex flex-col md:flex-row justify-between items-center px-4 rounded-md gap-4 md:gap-0
        max-md:rounded-xl max-md:mx-4 max-md:w-[calc(100%-2rem)]">
        <p className="font-semibold text-medium">Fast Service</p>
        <div className="flex gap-4 w-full md:w-auto justify-center">
          <button className="flex border bg-primary h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
            <img className="w-6 h-6" src="/image/Vector2.svg" alt="icon top up" />Top Up
          </button>
          <button className="flex mr-4 border bg-primary h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
            <img className="w-6 h-6" src="/image/Send2.svg" alt="icon transfer" /> Transfer
          </button>
        </div>
      </div>

      <div className="shadow mt-5 md:h-149.5 w-full overflow-hidden
        max-md:mx-4 max-md:w-[calc(100%-2rem)] max-md:rounded-xl">
        <ChartDashboard />
      </div>
    </section>
  );
}

export default IncomeChartDashboard;