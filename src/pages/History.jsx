import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import HistoryTransaction from "../component/section/HistoryTransaction";

const History = () => (
  <main>
    <section className="grid grid-cols-[1fr_4.5fr] gap-15 font-montserrat">
        <nav>
            <NavigationDashboard />
        </nav>
        <div>
          <HistoryTransaction />
        </div>
    </section>
  </main>
);
export default History;
