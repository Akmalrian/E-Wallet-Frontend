import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import Section1Dashboard from "../component/section/Section1Dashboard";
import Section2Dashboard from "../component/section/Section2Dashboard";

const Dashboard = () => (
  <main>
    <HeaderDashboard />
    <section className="grid grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
        <nav>
            <NavigationDashboard />
        </nav>
        <div>
          <Section1Dashboard />
        </div>
        <div>
          <Section2Dashboard />
        </div>
    </section>
  </main>
);
export default Dashboard;
