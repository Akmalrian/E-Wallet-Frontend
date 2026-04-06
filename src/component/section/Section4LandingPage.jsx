import CardOurCustomers from "./CardOurCutomers";

const Section4LandingPage = () => (
  <section className="font-montserrat">
      <div className="">
        <div className="text-black text-center">
          <h6 className="text-5xl mb-6 font-medium">Here From Our Customer</h6>
          <p className="text-[16px] text-[#4F5665] mb-14">
            We always do our best for our customers to stay comfortable using the applications we provide
          </p>
        </div>
        <div className="flex justify-center p-4 gap-10 mb-10">
            <div className="flex p-10"><img className="flex justify-end" src="/src/assets/arrowLeft.svg" alt="Arrow Left" /></div>
            <CardOurCustomers
            icon ="/src/assets/photo1.svg"
            rate="/src/assets/rating.svg"
            mark="/src/assets/“.svg"
            title = "Sherina Claw"
            text="“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”" />
            <CardOurCustomers
            icon ="/src/assets/photo2.svg"
            rate="/src/assets/rating.svg"
            mark="/src/assets/“.svg"
            title = "James Bond"
            text="“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”" />
            <CardOurCustomers
            icon ="/src/assets/photo3.svg"
            rate="/src/assets/rating.svg"
            mark="/src/assets/“.svg"
            title = "Ujang Kayu"
            text="“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”" />
            <div className="flex p-10"><img className="flex justify-end" src="/src/assets/arrowRight.svg" alt="Arrow Right" /></div>
        </div>
        <div className="flex justify-center">
            <img className="mb-30" src="/src/assets/ellipse.svg" alt="ellipse image" />
        </div>
      </div>
  </section>
);
export default Section4LandingPage;
