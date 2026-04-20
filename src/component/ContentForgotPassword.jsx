import { Link, useNavigate } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import InputLogin from "./input/InputLogin";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetPasswordToDefault, resetRegister } from "../store/slices/registerSlice";
import toast from "react-hot-toast";

const ContentForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, isSuccess, error } = useAppSelector((state) => state.register);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");

    // Cek apakah email terdaftar
    const userFound = users.find((u) => u.username === email);

    if (!userFound) {
      setEmailError("Email tidak terdaftar! Silahkan cek kembali.");
      return;
    }

    // Reset password ke default "12345"
    dispatch(resetPasswordToDefault({ username: email }));
  };

  // Reaksi setelah dispatch
  useEffect(() => {
    if (isSuccess) {
      toast.success(
        "Password berhasil direset! Password baru kamu adalah: qwerty",
        { duration: 5000 } // tampil lebih lama agar user sempat baca
      );
      dispatch(resetRegister());
      navigate("/login");
    }
    if (error) {
      toast.error(error);
      dispatch(resetRegister());
    }
  }, [isSuccess, error, dispatch, navigate]);

  return (
    <section className="w-full p-10 justify-center items-center">
      <div className="container">
        <h4 className="logo flex text-primary my-2 font-nunitoSans text-xl items-center gap-2">
          <img className="w-8 h-8" src="/image/MoneyWallet.png" alt="Money-Wallet.png" />
          E-Wallet
        </h4>
        <p className="text-3xl my-6 font-montserrat">
          <b>Fill Out Form Correctly 👋</b>
        </p>
        <p className="text-secondary mt-4 mb-6 font-montserrat">
          We will send new password to your email
        </p>
      </div>

      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputLogin
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            id="email"
            icon="/image/mail.png"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {emailError && (
            <p className="text-red-500 text-sm -mt-2">{emailError}</p>
          )}

          <ButtonLogin type="submit">Submit</ButtonLogin>
        </form>
      </div>
    </section>
  );
};

export default ContentForgotPassword;