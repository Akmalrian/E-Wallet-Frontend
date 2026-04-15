import FooterLandingPage from "../component/footer/FooterLandingPage";
import HeroLandingPage from "../component/landing/HeroLandingPage";
import AboutAplication from "../component/landing/AboutAplication";
import HeaderLandingPage from "../component/header/HeaderLandingPage";
import FeaturesAplication from "../component/landing/FeaturesAplication";
import TestimoniCustomer from "../component/landing/TestimoniCustomer";

const LandingPage = () => (
  <main className="overflow-hidden">
    <HeaderLandingPage />
    <HeroLandingPage />
    <AboutAplication />
    <FeaturesAplication />
    <TestimoniCustomer />
    <FooterLandingPage />
  </main>
);
export default LandingPage;

