import CardIncome from "../Card/CardIncome";
import ChartDashboard from "../section/ChartDashboard";

function IncomeChartDashboard() {
  return (
    <section className="text-[16px]">
      <div className="flex justify-between">
        <div>
          <CardIncome
            icon="/public/image/balance.svg"
            title="Balance"
            text="Rp.120.000"
            detail="+2%"
            arrow="/public/image/ArrowRise.svg"
            day="3 Days Ago"
          />
        </div>
        <div>
          <CardIncome
            icon="/public/image/income-withdraw.svg"
            title="Income"
            text="Rp2.120.000"
            detail="+11.01%"
            arrow="/public/image/ArrowRise.svg"
          />
        </div>
        <div>
          <CardIncome
            icon="/public/image/expense-withdraw.svg"
            title="Expense"
            text="Rp.200.000"
            detail="-5.06%"
            arrow="/public/image/arrowDown.svg"
          />
        </div>
      </div>
      <div className="shadow mt-5 h-20.25 w-full flex justify-between items-center rounded-md">
        <p className="ml-4 font-semibold text-[16px]">Fast Service</p>
        <div className="flex gap-4">
          <button className="flex border bg-[#2948FF] h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
          <img className="w-6 h-6" src="/public/image/Vector2.svg" alt="icon top up" />Top Up
        </button>
        <button className="flex mr-4 border bg-[#2948FF] h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
         <img className="w-6 h-6" src="/public/image/Send2.svg" alt="icon transfer" /> Transfer
        </button>
        </div>
      </div>
      <div className="shadow mt-5 h-[574px] w-full">
        <ChartDashboard />
      </div>
      <div>
        
      </div>
    </section>
  );
}

export default IncomeChartDashboard;

