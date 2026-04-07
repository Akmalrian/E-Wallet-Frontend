import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import SetNominal from "../component/section/SetNominal";

const TransferSetNominal = () => (
  <main>
    <HeaderDashboard />
    <section className="grid grid-cols-[1fr_4.5fr] gap-15 font-montserrat">
      <nav>
        <NavigationDashboard />
      </nav>
      <div>
        <SetNominal />
      </div>
    </section>
  </main>
);
export default TransferSetNominal;
