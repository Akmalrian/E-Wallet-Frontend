import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import IncomeChartDashboard from "../component/dashboard/IncomeChartDashboard";
import TransactionHistory from "../component/dashboard/TransactionHistory";

const Dashboard = () => (
  <main>
    <HeaderDashboard />
    <section className="md:grid md:grid-cols-[1fr_3fr_1.5fr] grid md:gap-15 items-center font-montserrat">
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
