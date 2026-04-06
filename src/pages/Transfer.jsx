import HeaderDashboard from "../component/header/HeaderDashboard";
import NavigationDashboard from "../component/header/NavigationDashboard";

const Transfer = () => (
  <main>
    <HeaderDashboard />
    <section className="grid grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
        <nav>
            <NavigationDashboard />
        </nav>
        <div>
          
        </div>
        <div>
          
        </div>
    </section>
  </main>
);
export default Transfer;
