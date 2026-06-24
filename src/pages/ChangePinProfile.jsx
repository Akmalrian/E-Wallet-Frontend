import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import ButtonLogin from "../component/button/ButtonLogin";
import NavigationDashboard from "../component/header/NavigationDashboard";
import VerifyPinModal from "../component/section/VerifyPinModal";
import { changePinAPI } from "../services/userService"; // ← import API
import toast from "react-hot-toast";

const ChangePinProfile = () => {
  const navigate = useNavigate();

  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(true);
  const [isPinVerified, setIsPinVerified]         = useState(false);
  const [pin, setPin]                             = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading]                 = useState(false);

  const oldPinRef = useRef("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInput = (e, index) => {
    const value  = e.target.value.replace(/\D/, "");
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

  const handleSubmit = async () => {
    const pinString = pin.join("");

      console.log("Old PIN (dari ref):", oldPinRef.current);
  console.log("New PIN:", pinString);
  console.log("Sama?:", pinString === oldPinRef.current);

    if (pinString.length < 6) {
      toast.error("PIN harus 6 digit!");
      return;
    }
    if (!/^\d{6}$/.test(pinString)) {
      toast.error("PIN hanya boleh angka!");
      return;
    }
    if (pinString === oldPinRef.current) {
      toast.error("PIN baru tidak boleh sama dengan PIN lama!");
      return;
    }

    setIsLoading(true);
    try {
      //  Kirim ke backend
      await changePinAPI(oldPinRef.current, pinString);

      toast.success("PIN berhasil diubah!");
      navigate("/profile");

    } catch (err) {
      console.log("Error dari backend:", err.message);
      toast.error(err.message || "Gagal mengubah PIN");
    } finally {
      setIsLoading(false);
    }
  };

  //  Terima PIN lama dari VerifyPinModal
  const handleVerifySuccess = (verifiedPin) => {
    oldPinRef.current = verifiedPin;          // simpan PIN lama
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
      {/*  Tidak perlu pass currentPin lagi */}
      <VerifyPinModal
        isOpen={isVerifyModalOpen}
        onClose={handleVerifyClose}
        onSuccess={handleVerifySuccess}
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
            <div className={`${!isPinVerified ? "blur-sm pointer-events-none" : ""}`}>
              <div className="text-center mb-10 md:mb-15 pt-5">
                <p className="font-semibold px-10 py-5">Change Pin 👋</p>
                <p className="text-secondary">
                  Please save your pin because this is so important.
                </p>

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
                <ButtonLogin
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Menyimpan..." : "Submit"}
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