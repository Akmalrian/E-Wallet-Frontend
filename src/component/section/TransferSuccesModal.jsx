function TransferSuccessModal({ isOpen, onClose, onTransferAgain, recipientName }) {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-10 max-md:items-end max-md:px-0"
      onClick={handleBackdropClick}
    >
      <div className="bg-white md:ml-30 mx-15 rounded-xl w-149 h-147.5 p-8 font-montserrat">
        <p className="text-xs font-semibold text-gray-400 border-b border-gray-200 pb-3 tracking-widest uppercase">
          Transfer to {recipientName}
        </p>
        <div className="flex flex-col items-center text-center">
          <img
            src="/image/Contact us.svg"
            alt="Transfer Success"
            className="mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">
            Yeay Transfer{' '}
            <span className="text-[#1EC15F]">Success</span>
          </h2>
          <p className="text-gray-400 text-sm mb-3">
            Thank you for using this application for your financial!
          </p>
        </div>

        <button
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base transition-colors mb-3"
          onClick={onClose}
        >
          Done
        </button>

        <button
          className="w-full py-3 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 rounded-lg font-semibold text-base transition-colors"
          onClick={onTransferAgain}
        >
          Transfer Again
        </button>
      </div>
    </div>
  );
}

export default TransferSuccessModal;