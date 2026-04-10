import CardIncome from "../Card/CardIncome";
import ChartDashboard from "../section/ChartDashboard";

function IncomeChartDashboard() {
  return (
    <section className="text-medium">
      <div className="md:flex md:justify-between grid justify-center">
        <div>
          <CardIncome
            icon="/image/balance.svg"
            title="Balance"
            text="Rp.120.000"
            detail="+2%"
            arrow="/image/ArrowRise.svg"
            day="3 Days Ago"
          />
        </div>
        <div>
          <CardIncome
            icon="/image/income-withdraw.svg"
            title="Income"
            text="Rp2.120.000"
            detail="+11.01%"
            arrow="/image/ArrowRise.svg"
          />
        </div>
        <div>
          <CardIncome
            icon="/image/expense-withdraw.svg"
            title="Expense"
            text="Rp.200.000"
            detail="-5.06%"
            arrow="/image/arrowDown.svg"
          />
        </div>
      </div>
      <div className="shadow mt-5 md:h-20.25 md:w-full flex md:justify-between w-[320px] justify-center ml-10 md:ml-0 md:items-center rounded-md">
        <p className="ml-4 font-semibold text-medium">Fast Service</p>
        <div className="flex gap-4">
          <button className="flex border bg-primary h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
          <img className="w-6 h-6" src="/image/Vector2.svg" alt="icon top up" />Top Up
        </button>
        <button className="flex mr-4 border bg-primary h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
         <img className="w-6 h-6" src="/image/Send2.svg" alt="icon transfer" /> Transfer
        </button>
        </div>
      </div>
      <div className="shadow mt-5 md:h-143.5 w-full">
        <ChartDashboard />
      </div>
      <div>
        
      </div>
    </section>
  );
}

export default IncomeChartDashboard;

