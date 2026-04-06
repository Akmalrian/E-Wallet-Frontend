
import SignInWithButton from "./button/SignInWithButton";
import ButtonLogin from "./button/ButtonLogin";
import { Link } from "react-router";
import InputLogin from "./input/InputLogin";

const ContentRegister = () => {
  return (
    <section className="h-screen w-full p-20">
      <div className="container">
        <h4 className="logo flex text-[#2948FF] my-2 font-nunitoSans text-xl items-center gap-2">
          <img className="w-8 h-8" src="./public/image/MoneyWallet.png" alt="Money-Wallet.png" /> E-Wallet
        </h4>
        <p className="text-3xl my-2 font-montserrat">
          <b>Start Accessing Banking Needs
            With All Devices and All Platforms
            With 30.000+ Users</b>
        </p>
        <p className="text-[#4F5665] mt-4 mb-6 font-montserrat">
          Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
        </p>
        </div>
    <div className="space-y-6">
      <div className="space-y-3">
        <SignInWithButton 
          icon="/public/image/google.png" 
          text="Sign In With Google" 
        />
        <SignInWithButton 
          icon="/public/image/facebook.png" 
          text="Sign In With Facebook" 
        />
      </div>

      <div className="relative flex py-2 items-center">
        <div className=" grow border-t border-gray-200"></div>
        <span className=" shrink mx-4 text-gray-400 text-sm">Or</span>
        <div className=" grow border-t border-gray-200"></div>
      </div>

      <form className="space-y-4">
        <InputLogin
          label="Email" 
          type="email" 
          placeholder="Enter Your Email" 
          id="email" 
          icon="./public/image/mail.png"
        />
        <InputLogin
          label="Password" 
          type="password" 
          placeholder="Enter Your Password" 
          id="pass" 
          icon="./public/image/password.png"
        />
        <InputLogin
          label="Confirm Password" 
          type="password" 
          placeholder="Enter Your Password Again" 
          id="pass" 
          icon="./public/image/password.png"
        />
        
        <ButtonLogin type="submit">Register</ButtonLogin>
      </form>
        <p className="text-center text-[#4F5665] font-montserrat">
        Have An Account?
        <Link className="text-[#2948FF] hover:underline" to={"/login"}> Login</Link>
        </p>
    </div>
    </section>
  );
};

export default ContentRegister;
