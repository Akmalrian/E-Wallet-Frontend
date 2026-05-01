function LogoutModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  // Klik backdrop → tutup modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50
        max-md:items-end"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-xl w-full max-w-sm p-8 font-montserrat mx-4
          max-md:rounded-t-2xl max-md:rounded-b-none max-md:mx-0 max-md:p-6"
        onClick={(e) => e.stopPropagation()} // ← klik dalam modal tidak menutup
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
            <img
              src="/image/Log Out.svg"
              alt="logout icon"
              className="w-8 h-8"
            />
          </div>
        </div>

        {/* Teks */}
        <h2 className="text-xl font-bold text-center mb-2">
          Keluar Aplikasi
        </h2>
        <p className="text-gray-400 text-sm text-center mb-8">
          Apakah anda yakin ingin keluar dari akun ini?
        </p>

        {/* Tombol */}
        <div className="grid gap-3">
          {/* Tombol Keluar */}
          <button
            onClick={onConfirm}
            className="w-full py-3 bg-red-500 hover:bg-red-600 text-white
              rounded-xl font-bold text-base transition-colors"
          >
            Ya, Keluar
          </button>

          {/* Tombol Batal */}
          <button
            onClick={onCancel}
            className="w-full py-3 bg-white hover:bg-gray-50 text-gray-600
              border border-gray-200 rounded-xl font-semibold text-base
              transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;