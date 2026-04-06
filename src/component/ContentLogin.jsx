
import { Link } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import SignInWithButton from "./button/SignInWithButton";
import InputLogin from "./input/InputLogin";

const ContentLogin = () => {
  return (
    <section className="h-screen w-full p-20">
      <div className="container">
        <h4 className="logo flex text-[#2948FF] my-2 font-nunitoSans text-xl items-center gap-2">
          <img className="w-8 h-8" src="./src/assets/MoneyWallet.png" alt="Money-Wallet.png" /> E-Wallet
        </h4>
        <p className="text-3xl my-2 font-montserrat">
          <b>Hello Welcome Back 👋</b>
        </p>
        <p className="text-[#4F5665] mt-4 mb-6 font-montserrat">
          Fill out the form correctly or you can login with several option.
        </p>
        </div>
    <div className="space-y-6">
      <div className="space-y-3">
        <SignInWithButton 
          icon="/src/assets/google.png" 
          text="Sign In With Google" 
        />
        <SignInWithButton 
          icon="/src/assets/facebook.png" 
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
          icon="./src/assets/mail.png"
        />
        <InputLogin
          label="Password" 
          type="password" 
          placeholder="Enter Your Password" 
          id="pass" 
          icon="./src/assets/password.png"
        />
        
        <div className="text-right font-montserrat">
          <Link to={"/forgot+password"} className="text-sm text-[#2948FF] hover:underline">Forgot Password?</Link>
        </div>

        <Link to={"/dashboard"}><ButtonLogin type="submit">Login</ButtonLogin></Link>
      </form>
        <p className="text-center text-[#4F5665] font-montserrat">
        Not Have An Account?
        <Link className="text-[#2948FF] hover:underline" to={"/register"}> Register</Link>
        </p>
    </div>
    </section>
  );
};

export default ContentLogin;