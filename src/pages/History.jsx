import { useEffect } from "react";
import NavigationDashboard from "../component/header/NavigationDashboard";
import HistoryTransaction from "../component/section/HistoryTransaction";

function History(){
  useEffect(() => {
        window.scrollTo(0, 0);
      });
  return(
  <main>
    <section className="grid grid-cols-[1fr_4.5fr] gap-15 font-montserrat max-md:grid-cols-1 max-md:gap-0">
        <nav>
            <NavigationDashboard />
        </nav>
        <div>
          <HistoryTransaction />
        </div>
    </section>
  </main>
);}
export default History;
