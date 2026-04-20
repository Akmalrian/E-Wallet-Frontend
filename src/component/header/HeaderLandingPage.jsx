import { useState } from "react"; // PERBAIKAN: Import useState
import { Link } from "react-router";

function DropdownLanding() {
  return (
    <div>
      <Link to={"/login"}>
      <button className="bg-white text-primary h-11 w-full rounded-[5px] hover:bg-gray-200 transition font-medium">
        Sign In
      </button>
      </Link>
      <Link to={"/register"}>
      <button className="bg-white text-primary h-11 w-full rounded-[5px] hover:bg-gray-200 transition font-medium">
        Sign Up
      </button>
      </Link>
    </div>
  );
}

function HeaderLandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDrown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white w-full sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src="/image/MoneyWallet.png" alt="Logo" />
          <span className="font-nunitoSans text-xl font-bold">E-Wallet</span>
        </div>

        <div className="flex items-center gap-4 relative">
          <div
            className="cursor-pointer flex items-center md:hidden"
            onClick={toggleDropDrown}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div>

          <div className="hidden md:flex gap-4">
            <Link to={"/login"}>
              <button className="border border-white h-11 px-6 rounded-[5px] hover:bg-white hover:text-primary transition font-medium">
                Sign In
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="bg-white text-primary h-11 px-6 rounded-[5px] hover:bg-gray-200 transition font-medium">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute flex justify-center md:hidden top-16 w-screen bg-white text-black shadow-lg rounded-md">
          <DropdownLanding />
        </div>
      )}
    </header>
  );
}

export default HeaderLandingPage;
