import BrandLandingPage from "../Card/BrandLandingPage";
import LeftHeroLanding from "./LeftHeroLanding";

const HeroLandingPage = () => (
  <main className="bg-white w-full ">
    <section
      className="flex flex-col-reverse relative top-70 md:static md:flex-row w-full h-screen p-28 max-md:flex-col-reverse max-md:top-0 max-md:h-auto max-md:p-6 max-md:pt-8"
    >
      <div className="bg-white flex-1 rounded-r-2xl max-md:rounded-none">
        <LeftHeroLanding />
      </div>
      <div className="md:flex grid max-md:flex max-md:justify-center items-center">
        <img
          className="relative z-10 md:w-screen not-md:h-100 w-72 max-md:h-auto max-md:mx-auto"
          src="/image/onlinePayment.png"
          alt="Wallet"
        />
      </div>
    </section>
    <section className="h-42.75 w-full bg-[#E8E8E84D] max-md:h-auto">
      <div className="mx-14 p-6 max-md:mx-4 max-md:p-4">
        <BrandLandingPage />
      </div>
    </section>
  </main>
);
export default HeroLandingPage;
