import ContentRegister from "../component/ContentRegister";

const RegisterPage = () => (
  <main className="bg-primary w-full ">
    <section className="flex w-full h-[130vh]">
      <div className="bg-white flex-1 rounded-r-2xl">
        <ContentRegister />
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center relative">
        <img
          className="absolute w-full h-full"
          src="/image/Ellipse 1.svg"
          alt="dim background"
        />
        <img
          className="relative z-10"
          src="/image/wallet.png"
          alt="Wallet"
        />
      </div>
    </section>
  </main>
);
export default RegisterPage;

