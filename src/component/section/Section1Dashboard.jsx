import CardIncome from "./CardIncome";
import ChartDashboard from "./ChartDashboard";

function Section1Dashboard() {
  return (
    <section className="text-[16px]">
      <div className="flex justify-between">
        <div>
          <CardIncome
            icon="/src/assets/balance.svg"
            title="Balance"
            text="Rp.120.000"
            detail="+2%"
            arrow="/src/assets/ArrowRise.svg"
            day="3 Days Ago"
          />
        </div>
        <div>
          <CardIncome
            icon="/src/assets/income-withdraw.svg"
            title="Income"
            text="Rp2.120.000"
            detail="+11.01%"
            arrow="/src/assets/ArrowRise.svg"
          />
        </div>
        <div>
          <CardIncome
            icon="/src/assets/expense-withdraw.svg"
            title="Expense"
            text="Rp.200.000"
            detail="-5.06%"
            arrow="/src/assets/arrowDown.svg"
          />
        </div>
      </div>
      <div className="shadow mt-5 h-20.25 w-full flex justify-between items-center rounded-md">
        <p className="ml-4 font-semibold text-[16px]">Fast Service</p>
        <div className="flex gap-4">
          <button className="flex border bg-[#2948FF] h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
          <img className="w-6 h-6" src="/src/assets/Vector2.svg" alt="icon top up" />Top Up
        </button>
        <button className="flex mr-4 border bg-[#2948FF] h-11 w-27.25 items-center justify-center gap-2 rounded-[5px] hover:bg-blue-700 transition text-white">
         <img className="w-6 h-6" src="/src/assets/Send2.svg" alt="icon transfer" /> Transfer
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

export default Section1Dashboard;

