
import { Link } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import InputLogin from "./input/InputLogin";

const ContentForgotPassword = () => {
  return (
    <section className="w-full p-10 justify-center items-center">
      <div className="container">
        <h4 className="logo flex text-[#2948FF] my-2 font-nunitoSans text-xl items-center gap-2">
          <img className="w-8 h-8" src="./src/assets/MoneyWallet.png" alt="Money-Wallet.png" /> E-Wallet
        </h4>
        <p className="text-3xl my-2 font-montserrat">
          <b>Fill Out Form Correctly 👋</b>
        </p>
        <p className="text-[#4F5665] mt-4 mb-6 font-montserrat">
          We will send new password to your email
        </p>
        </div>
    <div className="space-y-6">
      <form className="space-y-4">
        <InputLogin
          label="Email" 
          type="email"
          placeholder="Enter Your Email" 
          id="email" 
          icon="./src/assets/mail.png"
        />
        <ButtonLogin type="submit">Submit</ButtonLogin>
      </form>
    </div>
    </section>
  );
};

export default ContentForgotPassword;