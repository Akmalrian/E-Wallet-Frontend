import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function HeaderDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDrown = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="bg-[#ffffff] shadow w-full z-60 md:relative fixed">
      <nav className="max-w-full pl-8 pr-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8"
            src="/image/MoneyWallet.png"
            alt="Logo"
          />
          <span className="font-nunitoSans text-xl text-primary">E-Wallet</span>
        </div>
        <div className="flex items-center gap-4 text-secondary font-montserrat">
            <p>Ghaluh Wizard</p>
            
            <div className="cursor-pointer flex items-center gap-2" onClick={toggleDropDrown}>
            <img src="/image/photo-ghaluh.svg" alt="Photo Ghaluh" className="hidden md:block"
            />
            {isOpen? (
              <div className="md:flex hidden">
                <svg 
                  className="w-6 h-6 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>) : (
                <div className="md:block hidden">
                <img src="/image/down.svg" alt="Icon Down" />
              </div>
            )}
            
              <div className="block md:hidden">
                <svg 
                  className="w-6 h-6 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </div>
              
              </div>
            
            {isOpen && <DropdownMenu />}
        </div>
      </nav>
    </header>
  );
}
export default HeaderDashboard;
