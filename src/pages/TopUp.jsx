import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";
import TopUpAccountInformation from "../component/section/TopUpAccountInformation";
import TopUpPayment from "../component/section/TopUpPayment";

const TopUp = () => (
  <main>
    <HeaderDashboard />
    <section className="grid md:grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
        <nav>
            <NavigationDashboard />
        </nav>
        <div>
          <TopUpAccountInformation />
        </div>
        <div>
          <TopUpPayment />
        </div>
    </section>
  </main>
);
export default TopUp;
