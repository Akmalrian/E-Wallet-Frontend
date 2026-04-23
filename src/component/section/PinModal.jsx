import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deductBalance } from "../../store/slices/registerSlice";
import { syncCurrentUser } from "../../store/slices/authSlice";
import store from "../../store/store";

function PinModal({ isOpen, onClose, onSuccess, onFailed, recipientName, amount }) {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [pinError, setPinError] = useState("");

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setPin(["", "", "", "", "", ""]);
      setPinError("");
    }
  };

  const handleKeyDown = (e, index) => {
    const inputs = document.querySelectorAll(".pin-input");
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs[index - 1].focus();
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    const inputs = document.querySelectorAll(".pin-input");
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  const handleNext = () => {
    const inputPin = pin.join("");

    // Validasi panjang PIN
    if (inputPin.length < 6) {
      setPinError("PIN harus 6 digit!");
      return;
    }

    const users = store.getState().register.users;
    const userData = users.find((u) => u.username === currentUser.username);

    if (!userData || userData.pin !== inputPin) {
      setTimeout(() => {
        onFailed();
        setPin(["", "", "", "", "", ""]);
        setPinError("");
      }, 500);
      return;
    }

    // PIN benar lakukan kurangi balance
    dispatch(deductBalance({ username: currentUser.username, amount }));

    // Sync currentUser
    setTimeout(() => {
      const updatedUsers = store.getState().register.users;
      const updatedUser = updatedUsers.find(
        (u) => u.username === currentUser.username
      );
      if (updatedUser) dispatch(syncCurrentUser(updatedUser));
    }, 0);

    setPin(["", "", "", "", "", ""]);
    setPinError("");
    onSuccess();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-10
        max-md:items-end max-md:px-0"
      onClick={handleBackdropClick}
    >
      <div className="bg-white ml-30 rounded-xl w-149 h-auto md:h-147.5 p-8 font-montserrat
        max-md:ml-0 max-md:w-full max-md:rounded-t-2xl max-md:rounded-b-none max-md:p-6">

        <p className="text-xs font-semibold text-gray-400 border-b border-gray-200
          pb-3 mb-5 tracking-widest uppercase">
          Transfer to {recipientName}
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-20 max-md:mt-4">
          Enter Your Pin 👋
        </h2>
        <p className="text-gray-400 text-sm mb-8 max-md:mb-6">
          Enter Your Pin For Transaction
        </p>

        <div className="flex gap-5 justify-center mb-3 max-md:gap-3 md:mt-15">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              className="pin-input w-18 h-12 border-0 border-b-2 border-gray-300
                focus:border-blue-500 focus:outline-none text-3xl font-semibold
                text-center text-[#0B132A] max-md:w-12 max-md:h-10 max-md:text-2xl"
              type="password"
              maxLength="1"
              value={pin[i]}
              onChange={(e) => handleInput(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>

        {pinError && (
          <p className="text-red-500 text-sm text-center mb-4">{pinError}</p>
        )}

        <button
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white
            rounded-lg font-semibold text-base transition-colors mb-3 mt-4 md:mt-25"
          onClick={handleNext}
        >
          Next
        </button>

        <p className="text-center text-sm text-gray-400">
          Forgot Your Pin?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">Reset</span>
        </p>
      </div>
    </div>
  );
}

export default PinModal;