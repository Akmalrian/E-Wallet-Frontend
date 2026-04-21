import { useEffect, useState } from "react";
import NavigationDashboard from "../component/header/NavigationDashboard";
import TopUpAccountInformation from "../component/section/TopUpAccountInformation";
import TopUpPayment from "../component/section/TopUpPayment";

const TopUp = () => {
  const [amount, setAmount] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("");
  useEffect(() => {
        window.scrollTo(0, 0);
  });
  return (
    <main>
      <section className="grid md:grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat
        max-md:grid-cols-1 max-md:gap-0">
        <nav>
          <NavigationDashboard />
        </nav>
        <div>
          <TopUpAccountInformation
            amount={amount}
            setAmount={setAmount}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
        </div>
        <div>
          <TopUpPayment
            amount={amount}
            selectedMethod={selectedMethod}
          />
        </div>
      </section>
    </main>
  );
};

export default TopUp;