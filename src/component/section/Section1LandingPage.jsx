import HeaderLandingPage from "../header/HeaderLandingPage";
import BrandLandingPage from "./BrandLandingPage";
import ContentSection1LandingPage from "./ContentSection1LandingPage";

const Section1LadingPage = () => (
  <main className="bg-white w-full ">
    <HeaderLandingPage />
    <section className="flex w-full h-screen p-28">
      <div className="bg-white flex-1 rounded-r-2xl">
        <ContentSection1LandingPage />
      </div>
      <div className="flex">
        <img
          className="relative z-10"
          src="/src/assets/onlinePayment.png"
          alt="Wallet"
        />
      </div>
    </section>
    <section className="h-[171px] w-full bg-[#E8E8E84D]">
        <div className="mx-14 p-6">
    <BrandLandingPage />
        </div>
    </section>
  </main>
);
export default Section1LadingPage;

