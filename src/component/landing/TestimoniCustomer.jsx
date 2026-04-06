import CardOurCustomers from "../Card/CardOurCutomers";

const TestimoniCustomer = () => (
  <article className="font-montserrat">
      <div className="">
        <div className="text-black text-center">
          <h6 className="text-5xl mb-6 font-medium">Here From Our Customer</h6>
          <p className="text-[16px] text-[#4F5665] mb-14">
            We always do our best for our customers to stay comfortable using the applications we provide
          </p>
        </div>
        <div className="flex justify-center p-4 gap-10 mb-10">
            <div className="flex p-10"><img className="flex justify-end" src="/public/image/arrowLeft.svg" alt="Arrow Left" /></div>
            <CardOurCustomers
            icon ="/public/image/photo1.svg"
            rate="/public/image/rating.svg"
            mark="/public/image/“.svg"
            title = "Sherina Claw"
            text="“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”" />
            <CardOurCustomers
            icon ="/public/image/photo2.svg"
            rate="/public/image/rating.svg"
            mark="/public/image/“.svg"
            title = "James Bond"
            text="“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”" />
            <CardOurCustomers
            icon ="/public/image/photo3.svg"
            rate="/public/image/rating.svg"
            mark="/public/image/“.svg"
            title = "Ujang Kayu"
            text="“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”" />
            <div className="flex p-10"><img className="flex justify-end" src="/public/image/arrowRight.svg" alt="Arrow Right" /></div>
        </div>
        <div className="flex justify-center">
            <img className="mb-30" src="/public/image/ellipse.svg" alt="ellipse image" />
        </div>
      </div>
  </article>
);
export default TestimoniCustomer;

