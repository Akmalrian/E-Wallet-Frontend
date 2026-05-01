import { Link, useNavigate } from "react-router";
import ButtonLogin from "./button/ButtonLogin";
import InputLogin from "./input/InputLogin";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changePasswordByEmail, resetRegister } from "../store/slices/registerSlice";
import toast from "react-hot-toast";

const ContentForgotPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { users, isSuccess, error } = useAppSelector((state) => state.register);

  // ✅ Step 1: verifikasi email, Step 2: input password baru
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // ✅ Step 1 — cek apakah email terdaftar
  const handleVerifyEmail = (e) => {
    e.preventDefault();
    setEmailError("");

    const userFound = users.find((u) => u.username === email);
    if (!userFound) {
      setEmailError("Email tidak terdaftar! Silahkan cek kembali.");
      return;
    }

    // Email valid → lanjut ke step 2
    setStep(2);
  };

  // ✅ Step 2 — ubah password baru
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordError("");

    // Validasi password baru
    if (newPassword.length < 6) {
      setPasswordError("Password minimal 6 karakter!");
      return;
    }

    // Validasi konfirmasi password
    if (newPassword !== confirmPassword) {
      setPasswordError("Konfirmasi password tidak cocok!");
      return;
    }

    // Dispatch ganti password
    dispatch(changePasswordByEmail({
      username: email,
      newPassword,
    }));
  };

  // Reaksi setelah dispatch berhasil
  useEffect(() => {
    if (isSuccess) {
      toast.success("Password berhasil diubah!", { duration: 3000 });
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

        {/* ✅ Judul berubah sesuai step */}
        {step === 1 ? (
          <>
            <p className="text-3xl my-6 font-montserrat">
              <b>Fill Out Form Correctly 👋</b>
            </p>
            <p className="text-secondary mt-4 mb-6 font-montserrat">
              We will verify your email before changing the password.
            </p>
          </>
        ) : (
          <>
            <p className="text-3xl my-6 font-montserrat">
              <b>Create New Password 🔐</b>
            </p>
            <p className="text-secondary mt-4 mb-6 font-montserrat">
              Enter your new password for <b>{email}</b>
            </p>
          </>
        )}
      </div>

      <div className="space-y-6">

        {/* ✅ Step 1 — Form verifikasi email */}
        {step === 1 && (
          <form onSubmit={handleVerifyEmail} className="space-y-4">
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
              <p className="text-red-500 text-sm">{emailError}</p>
            )}
            <ButtonLogin type="submit">Verify Email</ButtonLogin>

            <p className="text-center text-secondary font-montserrat text-sm">
              Remember your password?{" "}
              <Link className="text-primary hover:underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        )}

        {/* ✅ Step 2 — Form password baru */}
        {step === 2 && (
          <form onSubmit={handleChangePassword} className="space-y-4">
            <InputLogin
              label="New Password"
              type="password"
              placeholder="Enter New Password"
              id="newPassword"
              icon="/image/password.png"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <InputLogin
              label="Confirm Password"
              type="password"
              placeholder="Re-enter New Password"
              id="confirmPassword"
              icon="/image/password.png"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* Error password */}
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}

            {/* Indikator konfirmasi cocok */}
            {confirmPassword && confirmPassword === newPassword && (
              <p className="text-green-500 text-sm">✓ Password cocok</p>
            )}

            <ButtonLogin type="submit">Change Password</ButtonLogin>

            {/* Tombol kembali ke step 1 */}
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setNewPassword("");
                setConfirmPassword("");
                setPasswordError("");
              }}
              className="w-full text-center text-secondary text-sm
                hover:text-primary transition-colors"
            >
              ← Kembali
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContentForgotPassword;