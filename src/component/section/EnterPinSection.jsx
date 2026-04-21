import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { savePinToUser } from "../../store/slices/registerSlice";
import { pinSaved, syncCurrentUser } from "../../store/slices/authSlice";
import toast from "react-hot-toast";
import store from "../../store/store";

function EnterPinSection() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.auth);

  const [pin, setPin] = useState(["", "", "", "", "", ""]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!pin[index] && index > 0) {
        const inputs = document.querySelectorAll(".pin-input");
        inputs[index - 1].focus();
      }
      
      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin);
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 5) {
      const inputs = document.querySelectorAll(".pin-input");
      inputs[index + 1].focus();
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

    dispatch(savePinToUser({
      username: currentUser.username,
      pin: pinString,
    }));

    const updatedUsers = store.getState().register.users;
    const updatedUser = updatedUsers.find(
      (u) => u.username === currentUser.username
    );
    if (updatedUser) {
      dispatch(syncCurrentUser(updatedUser));
    }

    dispatch(pinSaved());

    toast.success("PIN berhasil disimpan!");

    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div className="flex justify-center items-center h-[120vh]">
      <div className="bg-white rounded-xl md:w-149 w-full h-147.5 p-8 font-montserrat">
        <h4 className="logo flex text-primary my-2 font-nunitoSans text-xl items-center gap-2">
          <img className="w-8 h-8" src="/image/MoneyWallet.png" alt="Money-Wallet.png" />
          E-Wallet
        </h4>

        <h2 className="text-2xl font-semibold mb-3 mt-5">Enter Your Pin 👋</h2>
        <p className="text-gray-400 text-sm mb-15">
          Please save your pin because this is so important.
        </p>

        <div className="flex gap-5 justify-center mb-7">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              className="pin-input mb-20 md:w-18 w-12 h-12 border-0 border-b-2
                border-gray-300 focus:border-blue-500 focus:outline-none
                text-3xl font-semibold text-center text-[#0B132A]"
              type="password"
              maxLength="1"
              value={pin[i]}
              onInput={(e) => handleInput(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white
            rounded-lg font-semibold text-base transition-colors mb-3"
        >
          Submit
        </button>

        <p className="text-center text-sm text-gray-400">
          Forgot Your Pin?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">Reset</span>
        </p>
      </div>
    </div>
  );
}

export default EnterPinSection;