import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import TransferMoney from "../component/section/TransferMoney";

const Transfer = () => (
  <main>
    <section className="grid grid-cols-[1fr_4.5fr] gap-15 font-montserrat">
      <nav>
        <NavigationDashboard />
      </nav>
      <div>
        <TransferMoney />
      </div>
    </section>
  </main>
);
export default Transfer;
