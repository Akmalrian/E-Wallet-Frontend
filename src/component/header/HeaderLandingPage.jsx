import { Link } from "react-router";

function HeaderLandingPage() {
  return (
    <header className="bg-[#2948FF] text-white w-full">
      <nav className="max-w-full px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 relative left-20">
          <img
            className="w-8 h-8"
            src="/public/image/MoneyWallet.png"
            alt="Logo"
          />
          <span className="font-nunitoSans text-xl">E-Wallet</span>
        </div>
        <div className="flex gap-4 relative right-20">
          <Link to={"/login"}>
            <button className="border border-white h-11 px-6 rounded-[5px] hover:bg-white hover:cursor-pointer hover:text-[#2948FF] transition">
              Sign In
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="bg-white text-[#2948FF] h-11 px-6 rounded-[5px] hover:bg-gray-300 hover:cursor-pointer transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default HeaderLandingPage;
