import CardOurCustomers from "../Card/CardOurCutomers";

const TestimoniCustomer = () => (
  <article className="font-montserrat">
      <div className="">
        <div className="text-black text-center">
          <h6 className="text-5xl mb-6 font-medium">Here From Our Customer</h6>
          <p className="text-medium text-secondary mb-14">
            We always do our best for our customers to stay comfortable using the applications we provide
          </p>
        </div>
        <div className="flex justify-center p-4 gap-10 mb-10 max-md:flex-col max-md:items-center max-md:gap-6">
            <div className="flex p-10 max-md:hidden"><img className="flex justify-end" src="/image/arrowLeft.svg" alt="Arrow Left" /></div>
            <CardOurCustomers
            icon ="/image/photo1.svg"
            rate="/image/rating.svg"
            mark="/image/“.svg"
            title = "Sherina Claw"
            text="“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”" />
            <CardOurCustomers
            icon ="/image/photo2.svg"
            rate="/image/rating.svg"
            mark="/image/“.svg"
            title = "James Bond"
            text="“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”" />
            <CardOurCustomers
            icon ="/image/photo3.svg"
            rate="/image/rating.svg"
            mark="/image/“.svg"
            title = "Ujang Kayu"
            text="“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”" />
            <div className="flex p-10"><img className="flex justify-end" src="/image/arrowRight.svg" alt="Arrow Right" /></div>
        </div>
        <div className="flex justify-center">
            <img className="mb-30" src="/image/ellipse.svg" alt="ellipse image" />
        </div>
      </div>
  </article>
);
export default TestimoniCustomer;

