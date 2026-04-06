function FooterLandingPage() {
  return (
    <footer className="bg-[#2948FF] text-white w-full h-94.5 font-montserrat">
      <div className="max-w-full px-30 py-12 flex justify-between mb-15">
        <div className="w-66">
          <div className="flex items-center mb-4">
            <img
              className="w-12.5 h-12.5"
              src="./src/assets/MoneyWallet.png"
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
            <img src="/src/assets/telephone.svg" alt="icon telephone" />
            <p>+62 5637 8882 9901</p>
          </div>
          <div className="flex gap-4">
            <img src="/src/assets/mail.svg" alt="icon mail" />
            <p>contact@zwallet.com</p>
          </div>
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">SOCIAL MEDIA</h6>
          <img src="/src/assets/Social.svg" alt="icon social media" />
        </div>
        <div>
          <h6 className="mb-4 text-[18px] font-semibold">NEWSLETTER</h6>
          <div className="relative flex items-center">
            <img
              src="/src/assets/mail.png"
              className="absolute left-3 "
              alt="mail icon"
            />
            <input
              className="text-[#4F5665] pl-10 pr-3 py-2 rounded-md bg-white w-68.75"
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <button className="border mt-4 bg-white h-9 w-full px-6 rounded-md text-[#2948FF]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid justify-center text-center">
        <span className="border-t w-286.5 mb-6"></span>
        <p>© Copyright 2022, All Rights Reserved by ClarityUI</p>
      </div>
    </footer>
  );
}
export default FooterLandingPage;
