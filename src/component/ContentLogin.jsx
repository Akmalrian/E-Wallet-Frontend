import { Link } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import SignInWithButton from "./button/SignInWithButton";
import InputLogin from "./input/InputLogin";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router";
import { loginSchema } from "../schemas/schema.auth";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginSuccess, loginFailed, clearMessages } from "../store/slices/authSlice";
import { loginAPI } from "../services/authService";

const ContentLogin = () => {
  const dispatch  = useAppDispatch();
  const navigate  = useNavigate();
  const { error, success, needsPin } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const onLogin = async (data) => {
    setIsLoading(true);
    try {
      // ✅ Kirim ke backend
      const response = await loginAPI(data.username, data.password);

      // Dispatch loginSuccess dengan data dari backend
      dispatch(loginSuccess({
        token:   response.data.token,
        user:    response.data.user,
        has_pin: response.data.has_pin,
      }));

    } catch (err) {
      dispatch(loginFailed(err.message));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch(clearMessages());
      setTimeout(() => {
        // ✅ Cek has_pin dari backend
        if (needsPin) {
          navigate("/enter-pin"); // ← belum set PIN
        } else {
          navigate("/dashboard"); // ← sudah set PIN
        }
      }, 1000);
    }
    if (error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [success, error, dispatch, navigate, needsPin]);

  return (
    <section className="h-screen w-full md:p-20 p-10">
      <div className="container">
        <h4 className="logo flex text-primary my-2 font-nunitoSans text-xl items-center gap-2">
          <Link to="/">
            <img className="w-8 h-8" src="/image/MoneyWallet.png" alt="Money-Wallet.png" />
          </Link>{" "}
          E-Wallet
        </h4>
        <p className="text-3xl my-2 font-montserrat">
          <b>Hello Welcome Back 👋</b>
        </p>
        <p className="text-secondary mt-4 mb-6 font-montserrat">
          Fill out the form correctly or you can login with several option.
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
        <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
          <InputLogin
            label="Email" type="text" placeholder="Enter Your Email"
            id="email" icon="/image/mail.png" {...register("username")}
          />
          {errors.username && (
            <span className="text-red-500 text-sm block mt-1">
              {errors.username.message}
            </span>
          )}
          <InputLogin
            label="Password" type="password" placeholder="Enter Your Password"
            id="pass" icon="/image/password.png" {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm block mt-1">
              {errors.password.message}
            </span>
          )}
          <div className="text-right font-montserrat">
            <Link to={"forgot-password"} className="text-sm text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>
          <ButtonLogin type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </ButtonLogin>
        </form>
        <p className="text-center text-secondary font-montserrat">
          Not Have An Account?
          <Link className="text-primary hover:underline" to={"/register"}> Register</Link>
        </p>
      </div>
    </section>
  );
};

export default ContentLogin;