function FooterLandingPage() {
  return (
    <footer className="bg-primary text-white w-full h-94.5 font-montserrat max-md:h-180">
      <div className="max-w-full px-30 py-12 flex justify-between mb-15 max-md:flex-col max-md:px-6 max-md:py-8 max-md:gap-8 max-md:mb-0">
        <div className="w-66 max-md:w-full">
          <div className="flex items-center mb-4">
            <img
              className="w-12.5 h-12.5"
              src="/image/MoneyWallet.png"
              alt="Logo"
            />
            <h6 className="font-nunitoSans text-[36px] mx-4">E-Wallet</h6>
          </div>
          <p>
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">GET IN TOUCH</h6>
          <div className="flex gap-4 mb-4">
            <img src="/image/telephone.svg" alt="icon telephone" />
            <p>+62 5637 8882 9901</p>
          </div>
          <div className="flex gap-4">
            <img src="/image/mail.svg" alt="icon mail" />
            <p>contact@zwallet.com</p>
          </div>
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">SOCIAL MEDIA</h6>
          <img src="/image/Social.svg" alt="icon social media" />
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">NEWSLETTER</h6>
          <div className="relative flex items-center">
            <img
              src="/image/mail.png"
              className="absolute left-3 "
              alt="mail icon"
            />
            <input
              className="text-secondary pl-10 pr-3 py-2 w-full rounded-md bg-white"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <button className="border mt-4 bg-white h-9 w-full px-6 rounded-md text-primary">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid justify-center text-center">
        <span className="border-t w-286.5 mb-6 max-md:w-full"></span>
        <p>© Copyright 2022, All Rights Reserved by ClarityUI</p>
      </div>
    </footer>
  );
}
export default FooterLandingPage;
