import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function HeaderDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDrown = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="bg-[#ffffff] shadow w-full">
      <nav className="max-w-full pl-8 pr-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8"
            src="/public/image/MoneyWallet.png"
            alt="Logo"
          />
          <span className="font-nunitoSans text-xl text-primary">E-Wallet</span>
        </div>
        <div className="flex items-center gap-4 text-secondary font-montserrat">
            <p>Ghaluh Wizard</p>
            <div className="cursor-pointer flex items-center gap-2" onClick={toggleDropDrown}>
            <img src="/public/image/photo-ghaluh.svg" alt="Photo Ghaluh" 
            />
            <img src="/public/image/down.svg" alt="Icon Down" /></div>

            {isOpen && <DropdownMenu />}
        </div>
      </nav>
    </header>
  );
}
export default HeaderDashboard;
