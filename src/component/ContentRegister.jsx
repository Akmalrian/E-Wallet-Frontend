import SignInWithButton from "./button/SignInWithButton";
import ButtonLogin from "./button/ButtonLogin";
import { Link, useNavigate } from "react-router";
import InputLogin from "./input/InputLogin";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerSchema } from "../schemas/schema.auth.js";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../store/hooks";
// Pakai registerThunk dari authSlice, hapus registerSlice
import { registerThunk, clearMessages } from "../store/slices/authSlice";

const ContentRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // Ambil state dari authSlice bukan registerSlice
  const { isLoading, success, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
  });

  // Dispatch thunk langsung
  const onSubmit = (data) => {
    dispatch(registerThunk({ email: data.username, password: data.password }));
  };

  useEffect(() => {
    if (!isLoading && success) {
      toast.success(success);
      dispatch(clearMessages());
      setTimeout(() => navigate("/login"), 1000);
    }
    if (!isLoading && error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [isLoading, success, error, dispatch, navigate]);

  return (
    <section className="h-screen w-full md:p-20 p-10 items-center">
      <div className="container">
        <h4 className="logo flex text-primary my-2 font-nunitoSans text-xl items-center gap-2">
          <img className="w-8 h-8" src="/image/MoneyWallet.png" alt="Money-Wallet.png" />
          E-Wallet
        </h4>
        <p className="text-3xl my-2 font-montserrat">
          <b>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</b>
        </p>
        <p className="text-secondary mt-4 mb-6 font-montserrat">
          Transfering money is eassier than ever, you can access Zwallet wherever you are.
          Desktop, laptop, mobile phone? we cover all of that for you!
        </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <SignInWithButton icon="/image/google.png" text="Sign In With Google" />
          <SignInWithButton icon="/image/facebook.png" text="Sign In With Facebook" />
        </div>
        <div className="relative flex py-2 items-center">
          <div className="grow border-t border-gray-200"></div>
          <span className="shrink mx-4 text-gray-400 text-sm">Or</span>
          <div className="grow border-t border-gray-200"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <InputLogin
              label="Email" type="text" placeholder="Enter Your Email"
              id="username" icon="/image/mail.png" {...register("username")}
            />
            {errors.username && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.username.message}
              </span>
            )}
          </div>
          <div>
            <InputLogin
              label="Password" type="password" placeholder="Enter Your Password"
              id="password" icon="/image/password.png" {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <InputLogin
              label="Confirm Password" type="password"
              placeholder="Enter Your Password Again"
              id="repeat_password" icon="/image/password.png"
              {...register("repeat_password")}
            />
            {errors.repeat_password && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.repeat_password.message}
              </span>
            )}
          </div>
          <ButtonLogin type="submit" disabled={isLoading}>
            {isLoading ? "Mendaftar..." : "Register"}
          </ButtonLogin>
        </form>
        <p className="text-center text-secondary font-montserrat">
          Have An Account?
          <Link className="text-primary hover:underline" to={"/login"}> Login</Link>
        </p>
      </div>
    </section>
  );
};

export default ContentRegister;