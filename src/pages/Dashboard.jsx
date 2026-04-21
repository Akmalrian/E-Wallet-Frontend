import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import IncomeChartDashboard from "../component/dashboard/IncomeChartDashboard";
import TransactionHistory from "../component/dashboard/TransactionHistory";
import { useEffect } from "react";

function Dashboard(){
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
  <main>
    <section className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-[1fr_3fr_1.5fr] gap-6 md:gap-10 items-start font-montserrat
  max-md:grid-cols-1 max-md:px-0">
        <nav>
          <NavigationDashboard />
        </nav>
        <div>
          <IncomeChartDashboard />
        </div>
        <div>
          <TransactionHistory />
        </div>
    </section>
  </main>
);}
export default Dashboard;
