import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ButtonLogin from "../component/button/ButtonLogin";
import NavigationDashboard from "../component/header/NavigationDashboard";
import VerifyPinModal from "../component/section/VerifyPinModal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changePin, resetRegister } from "../store/slices/registerSlice";
import { syncCurrentUser } from "../store/slices/authSlice";
import store from "../store/store";
import toast from "react-hot-toast";

const ChangePinProfile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { isSuccess, error } = useAppSelector((state) => state.register);

  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(true);

  const [isPinVerified, setIsPinVerified] = useState(false);

  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isSuccess) {
      toast.success("PIN berhasil diubah!");
      dispatch(resetRegister());
      const updatedUsers = store.getState().register.users;
      const updatedUser = updatedUsers.find(
        (u) => u.username === currentUser.username
      );
      if (updatedUser) dispatch(syncCurrentUser(updatedUser));
      navigate("/profile");
    }
    if (error) {
      toast.error(error);
      dispatch(resetRegister());
    }
  }, [isSuccess, error, dispatch, navigate, currentUser]);

  const handleInput = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    if (value && index < 5) {
      document.querySelectorAll(".change-pin-input")[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      document.querySelectorAll(".change-pin-input")[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const pinString = pin.join("");
    if (pinString.length < 6) {
      toast.error("PIN harus 6 digit!");
      return;
    }
    if (!/^\d{6}$/.test(pinString)) {
      toast.error("PIN hanya boleh angka!");
      return;
    }
    dispatch(changePin({
      username: currentUser.username,
      newPin: pinString,
    }));
  };

  const handleVerifySuccess = () => {
    setIsVerifyModalOpen(false);
    setIsPinVerified(true);
    toast.success("PIN terverifikasi! Silahkan masukkan PIN baru.");
  };

  const handleVerifyClose = () => {
    setIsVerifyModalOpen(false);
    if (!isPinVerified) {
      navigate("/profile");
    }
  };

  return (
    <main>
      {/* ✅ Modal Verifikasi PIN Lama */}
      <VerifyPinModal
        isOpen={isVerifyModalOpen}
        onClose={handleVerifyClose}
        onSuccess={handleVerifySuccess}
        currentPin={currentUser?.pin || ""}
      />

      <section className="grid md:grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
        <nav>
          <NavigationDashboard />
        </nav>

        <section className="mt-6 text-medium font-montserrat">
          <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
            <img src="/image/2User.svg" alt="icon history" />
            <p>Profile</p>
          </div>

          <div className="mx-4 md:w-280 md:h-auto justify-between shadow">

            {/* ✅ Blur konten jika PIN belum diverifikasi */}
            <div className={`${!isPinVerified ? "blur-sm pointer-events-none" : ""}`}>
              <div className="text-center mb-10 md:mb-15 pt-5">
                <p className="font-semibold px-10 py-5">Change Pin 👋</p>
                <p className="text-secondary">
                  Please save your pin because this is so important.
                </p>

                {/* PIN Input Baru */}
                <div className="flex gap-5 justify-center mt-10">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <input
                      key={i}
                      className="change-pin-input w-10 h-10 md:w-20 md:h-20
                        border-b-2 font-medium border-b-black
                        focus:outline-none focus:border-b-blue-500
                        text-3xl text-center text-[#0B132A] transition-colors"
                      type="password"
                      maxLength="1"
                      value={pin[i]}
                      onChange={(e) => handleInput(e, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                    />
                  ))}
                </div>
              </div>

              <div className="mx-10 pb-10">
                <ButtonLogin type="button" onClick={handleSubmit}>
                  Submit
                </ButtonLogin>
              </div>
            </div>

          </div>
        </section>
      </section>
    </main>
  );
};

export default ChangePinProfile;