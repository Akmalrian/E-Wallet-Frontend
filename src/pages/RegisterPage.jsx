import ContentRegister from "../component/ContentRegister";

const RegisterPage = () => (
  <main className="bg-[#2948FF] w-full ">
    <section className="flex w-full h-[130vh]">
      <div className="bg-white flex-1 rounded-r-2xl">
        <ContentRegister />
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center relative">
        <img
          className="absolute w-full h-full"
          src="/src/assets/Ellipse 1.svg"
          alt="dim background"
        />
        <img
          className="relative z-10"
          src="/src/assets/wallet.png"
          alt="Wallet"
        />
      </div>
    </section>
  </main>
);
export default RegisterPage;
