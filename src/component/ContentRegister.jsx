import SignInWithButton from "./button/SignInWithButton";
import ButtonLogin from "./button/ButtonLogin";
import { Link, useNavigate } from "react-router";
import InputLogin from "./input/InputLogin";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {registerSchema} from "../schemas/schema.auth.js";

const ContentRegister = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerSchema),
  });
    const onSubmit = (data) => {
  // 1. Ambil data user yang sudah ada di localStorage (jika ada)
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // 2. Cek apakah username sudah terdaftar
  const isUsernameTaken = existingUsers.some(user => user.username === data.username);

  if (isUsernameTaken) {
    alert("Username sudah digunakan, silakan pilih yang lain.");
    return;
  }

  // 3. Tambahkan user baru ke dalam array (hapus repeat_password agar tidak ikut tersimpan)
  const { repeat_password: _, ...newUser } = data;
  existingUsers.push(newUser);

  // 4. Simpan kembali ke localStorage
  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Registrasi Berhasil! Silakan Login.");
  navigate("/login"); // Pastikan sudah import useNavigate dari react-router
};

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
          <b>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </b>
        </p>
        <p className="text-[#4F5665] mt-4 mb-6 font-montserrat">
          Transfering money is eassier than ever, you can access Zwallet
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <InputLogin
              label="Email"
              type="text"
              placeholder="Enter Your Email"
              id="username"
              icon="./public/image/mail.png"
              {...register("username")}
            />

            {errors.username && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.username.message}
              </span>
            )}
          </div>

          <div>
            <InputLogin
              label="Password"
              type="password"
              placeholder="Enter Your Password"
              id="password"
              icon="./public/image/password.png"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <div>
            <InputLogin
              label="Confirm Password"
              type="password"
              placeholder="Enter Your Password Again"
              id="repeat_password"
              icon="./public/image/password.png"
              {...register("repeat_password")}
            />
            {errors.repeat_password && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.repeat_password.message}
              </span>
            )}
          </div>

          <ButtonLogin type="submit">Register</ButtonLogin>
        </form>
        <p className="text-center text-[#4F5665] font-montserrat">
          Have An Account?
          <Link className="text-[#2948FF] hover:underline" to={"/login"}>
            {" "}
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ContentRegister;
