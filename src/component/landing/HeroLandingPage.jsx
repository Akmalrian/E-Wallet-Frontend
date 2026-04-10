import BrandLandingPage from "../Card/BrandLandingPage";
import LeftHeroLanding from "./LeftHeroLanding";

const HeroLandingPage = () => (
  <main className="bg-white w-full ">
    <section className="flex w-full h-screen p-28">
      <div className="bg-white flex-1 rounded-r-2xl">
        <LeftHeroLanding />
      </div>
      <div className="flex">
        <img
          className="relative z-10"
          src="/public/image/onlinePayment.png"
          alt="Wallet"
        />
      </div>
    </section>
    <section className="h-42.75 w-full bg-[#E8E8E84D]">
        <div className="mx-14 p-6">
    <BrandLandingPage />
        </div>
    </section>
  </main>
);
export default HeroLandingPage;

