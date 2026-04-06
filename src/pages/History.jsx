import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import SectionHistory from "../component/section/SectionHistory";

const History = () => (
  <main>
    <HeaderDashboard />
    <section className="grid grid-cols-[1fr_4.5fr] gap-15 font-montserrat">
        <nav>
            <NavigationDashboard />
        </nav>
        <div>
          <SectionHistory />
        </div>
    </section>
  </main>
);
export default History;
