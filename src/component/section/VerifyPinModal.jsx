import {useState } from "react";

function VerifyPinModal({ isOpen, onClose, onSuccess, currentPin }) {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [pinError, setPinError] = useState("");

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setPin(["", "", "", "", "", ""]);
    setPinError("");
    onClose();
  };

  const handleInput = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 5) {
      document.querySelectorAll(".verify-pin-input")[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      document.querySelectorAll(".verify-pin-input")[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const inputPin = pin.join("");

    if (inputPin.length < 6) {
      setPinError("PIN harus 6 digit!");
      return;
    }


    if (inputPin !== currentPin) {
      setPin(["", "", "", "", "", ""]);
      document.querySelectorAll(".verify-pin-input")[0]?.focus();

      setPinError(
        `PIN salah! Silahkan coba lagi.`
      );
      return;
    }

    setPin(["", "", "", "", "", ""]);
    setPinError("");
    onSuccess();
  };

  return (
    <div
      className="fixed inset-0 md:ml-50 bg-black/50 flex items-center-safe justify-center z-50
        max-md:items-end"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-xl w-full max-w-md p-8 font-montserrat mx-4
          max-md:rounded-t-2xl max-md:rounded-b-none max-md:mx-0 max-md:p-6"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold">Verifikasi PIN</h2>
            <p className="text-gray-400 text-sm mt-4">
              Masukkan PIN lama kamu untuk melanjutkan
            </p>
          </div>
        </div>


        <div className="flex gap-3 justify-center mb-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              className={`verify-pin-input w-12 h-12 border-0 border-b-2
                focus:outline-none text-2xl font-semibold text-center
                text-[#0B132A] transition-colors
                ${pinError
                  ? "border-b-red-400" 
                  : "border-b-gray-300 focus:border-b-blue-500" 
                }`}
              type="password"
              maxLength="1"
              value={pin[i]}
              onChange={(e) => handleInput(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>

        {pinError && (
          <p className="text-red-500 text-sm text-center mb-4">
            {pinError}
          </p>
        )}

        <button
          onClick={handleVerify}
          className="w-full py-3 bg-primary hover:bg-blue-700 text-white
            rounded-xl font-bold text-base transition-colors mt-2"
        >
          Verifikasi PIN
        </button>

        <button
          onClick={handleClose}
          className="w-full py-3 mt-3 bg-gray-200 rounded-xl text-black hover:bg-gray-300
            text-sm transition-colors"
        >
          Batal
        </button>
      </div>
    </div>
  );
}

export default VerifyPinModal;