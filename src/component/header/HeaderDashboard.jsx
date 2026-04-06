
function HeaderDashboard() {
  return (
    <header className="bg-[#ffffff] shadow w-full">
      <nav className="max-w-full pl-8 pr-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8"
            src="./src/assets/MoneyWallet.png"
            alt="Logo"
          />
          <span className="font-nunitoSans text-xl text-[#2948FF]">E-Wallet</span>
        </div>
        <div className="flex items-center gap-4 text-[#4F5665] font-montserrat">
            <p>Ghaluh Wizard</p>
            <img src="/src/assets/photo-ghaluh.svg" alt="Photo Ghaluh" />
            <img src="/src/assets/down.svg" alt="Icon Down" />
        </div>
      </nav>
    </header>
  );
}
export default HeaderDashboard;
