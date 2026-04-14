function PinModal({ isOpen, onClose, onSuccess, recipientName }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e, index) => {
    const inputs = document.querySelectorAll('.pin-input');
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputs[index - 1].focus();
    }
  };

  const handleInput = (e, index) => {
    const inputs = document.querySelectorAll('.pin-input');
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  const handleNext = () => {
    onClose();      // tutup modal PIN
    onSuccess();    // buka modal sukses
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-10"
      onClick={handleBackdropClick}
    >
      <div className="bg-white ml-30 rounded-xl w-149 h-147.5 p-8 font-montserrat">
        <p className="text-xs font-semibold text-gray-400 border-b border-gray-200 pb-3 mb-5 tracking-widest uppercase">
          Transfer to {recipientName}
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-15">Enter Your Pin 👋</h2>
        <p className="text-gray-400 text-sm mb-15">Enter Your Pin For Transaction</p>

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
          onClick={handleNext}
        >
          Next
        </button>

        <p className="text-center text-sm text-gray-400">
          Forgot Your Pin?{' '}
          <span className="text-blue-600 hover:underline cursor-pointer">Reset</span>
        </p>
      </div>
    </div>
  );
}

export default PinModal;