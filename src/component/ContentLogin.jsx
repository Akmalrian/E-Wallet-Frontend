import { Link, useNavigate } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import SignInWithButton from "./button/SignInWithButton";
import InputLogin from "./input/InputLogin";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginSchema } from "../schemas/schema.auth.js";

const ContentLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
  });

  // Logika Login
  const onLogin = (data) => {
    // 1. Ambil data dari localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Cari user yang cocok
    const userFound = existingUsers.find(
      (user) => user.username === data.username && user.password === data.password
    );

    if (userFound) {
      localStorage.setItem("currentUser", JSON.stringify(userFound));
      alert("Login Berhasil!");
      navigate("/dashboard"); 
    } else {
      alert("Username atau Password salah!");
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log("[DEBUG] error form", errors);
    }
  }, [errors]);

  return (
    <section className="h-screen w-full p-20">
      <div className="container">
        <h4 className="logo flex text-[#2948FF] my-2 font-nunitoSans text-xl items-center gap-2">
          <img className="w-8 h-8" src="/image/MoneyWallet.png" alt="Logo" /> E-Wallet
        </h4>
        <p className="text-3xl my-2 font-montserrat"><b>Hello Welcome Back 👋</b></p>
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

        {/* PERBAIKAN: Gunakan onLogin di sini */}
        <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
          <InputLogin
            label="Email/Username"
            type="text"
            placeholder="Enter Your Email"
            id="email"
            icon="/image/mail.png"
            {...register("username")}
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}

          <InputLogin
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            id="pass"
            icon="/image/password.png"
            {...register("password")}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

          <div className="text-right">
            <Link to="/forgot-password" size="sm" className="text-[#2948FF] hover:underline">
              Forgot Password?
            </Link>
          </div>

          <ButtonLogin type="submit">Login</ButtonLogin>
        </form>

        <p className="text-center text-[#4F5665]">
          Not Have An Account? 
          <Link className="text-[#2948FF] font-bold" to="/register"> Register</Link>
        </p>
      </div>
    </section>
  );
};

export default ContentLogin;