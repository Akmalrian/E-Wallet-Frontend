import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import IncomeChartDashboard from "../component/dashboard/IncomeChartDashboard";
import TransactionHistory from "../component/dashboard/TransactionHistory";

const Dashboard = () => (
  <main>
    <HeaderDashboard />
    <section className="grid grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
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
);
export default Dashboard;
