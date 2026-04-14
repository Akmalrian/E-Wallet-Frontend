function EnterPinSection() {
  const handleKeyDown = (e, index) => {
    const inputs = document.querySelectorAll(".pin-input");
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs[index - 1].focus();
    }
  };

  const handleInput = (e, index) => {
    const inputs = document.querySelectorAll(".pin-input");
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center h-[120vh]">
      <div className="bg-white rounded-xl w-149 h-147.5 p-8 font-montserrat">
        <h4 className="logo flex text-primary my-2 font-nunitoSans text-xl items-center gap-2">
          <img
            className="w-8 h-8"
            src="/image/MoneyWallet.png"
            alt="Money-Wallet.png"
          />{" "}
          E-Wallet
        </h4>

        <h2 className="text-2xl font-semibold mb-3 mt-5">Enter Your Pin 👋</h2>
        <p className="text-gray-400 text-sm mb-15">
          Please save your pin because this so important.
        </p>

        <div className="flex gap-5 justify-center mb-7">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              className="pin-input mb-20 w-18 h-12 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-3xl font-semibold text-center text-[#0B132A]"
              type="password"
              maxLength="1"
              onKeyDown={(e) => handleKeyDown(e, i)}
              onInput={(e) => handleInput(e, i)}
            />
          ))}
        </div>

        <button
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base transition-colors mb-3"
        >
          Submit
        </button>

        <p className="text-center text-sm text-gray-400">
          Forgot Your Pin?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Reset
          </span>
        </p>
      </div>
      </div>
  );
}

export default EnterPinSection;
