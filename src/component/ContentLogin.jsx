import { Link } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import SignInWithButton from "./button/SignInWithButton";
import InputLogin from "./input/InputLogin";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import authSchema from "../schemas/schema.auth.js";

const ContentLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(authSchema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log("[DEBUG] error form", errors);
  }, [errors]);
  
  return (
    <section className="h-screen w-full p-20">
      <div className="container">
        <h4 className="logo flex text-[#2948FF] my-2 font-nunitoSans text-xl items-center gap-2">
          <img
            className="w-8 h-8"
            src="./public/image/MoneyWallet.png"
            alt="Money-Wallet.png"
          />{" "}
          E-Wallet
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
            icon="/public/image/google.png"
            text="Sign In With Google"
          />
          <Link to={"/dashboard"}>
          <SignInWithButton
            icon="/public/image/facebook.png"
            text="Sign In With Facebook"
          />
          </Link>
        </div>

        <div className="relative flex py-2 items-center">
          <div className=" grow border-t border-gray-200"></div>
          <span className=" shrink mx-4 text-gray-400 text-sm">Or</span>
          <div className=" grow border-t border-gray-200"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputLogin
            label="Email"
            type="text"
            placeholder="Enter Your Email"
            id="email"
            icon="./public/image/mail.png"
            {...register("username")}
          />
          {errors.username && (
            <span className="text-red-500 text-sm block mt-1">
              {errors.username.message}
            </span>
          )}
          <InputLogin
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            id="pass"
            icon="./public/image/password.png"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm block mt-1">
              {errors.password.message}
            </span>
          )}

          <div className="text-right font-montserrat">
            <Link
              to={"/forgot+password"}
              className="text-sm text-[#2948FF] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          
            <ButtonLogin type="submit">Login</ButtonLogin>
          
        </form>
        <p className="text-center text-[#4F5665] font-montserrat">
          Not Have An Account?
          <Link className="text-[#2948FF] hover:underline" to={"/register"}>
            {" "}
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};
export default ContentLogin;
