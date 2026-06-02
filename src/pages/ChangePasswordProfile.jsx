import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ButtonLogin from "../component/button/ButtonLogin";
import NavigationDashboard from "../component/header/NavigationDashboard";
import toast from "react-hot-toast";
import { changePasswordAPI } from "../services/userService";

function ChangePasswordProfile() {
  const navigate = useNavigate();

  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showExisting, setShowExisting] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!existingPassword || !newPassword || !confirmPassword) {
      toast.error("Semua field harus diisi!");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password baru minimal 6 karakter!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Konfirmasi password tidak cocok!");
      return;
    }

    if (existingPassword === newPassword) {
      toast.error("Password baru tidak boleh sama dengan password lama!");
      return;
    }

    setIsLoading(true);
    try {
      // Kirim ke backend
      await changePasswordAPI(existingPassword, newPassword);

      toast.success("Password berhasil diubah!");
      navigate("/profile");

    } catch (err) {
      // Error dari backend (password lama salah, dll)
      toast.error(err.message || "Gagal mengubah password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className="grid md:grid-cols-[1fr_3fr_1.5fr] gap-15 font-montserrat">
        <nav>
          <NavigationDashboard />
        </nav>
        <section className="mt-6 text-medium font-montserrat">
          <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
            <img src="/image/2User.svg" alt="icon history" />
            <p>Profile</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-4 md:w-280 md:h-auto justify-between shadow p-5"
          >
            <div className="mb-10">
              <p className="font-bold mb-4">Change Password</p>

              {/* Existing Password */}
              <h6 className="mt-3 font-semibold">Existing Password</h6>
              <div className="relative flex items-center mt-1">
                <img
                  src="/image/Password.svg"
                  alt=""
                  className="absolute left-4 w-5 h-5 pointer-events-none"
                />
                <input
                  type={showExisting ? "text" : "password"}
                  placeholder="Enter Your Existing Password"
                  value={existingPassword}
                  onChange={(e) => setExistingPassword(e.target.value)}
                  className="w-full py-3 pl-12 pr-12 rounded-md border border-gray-200
                    focus:border-primary outline-none transition bg-transparent"
                />
                {/* Toggle show/hide */}
                <button
                  type="button"
                  onClick={() => setShowExisting(!showExisting)}
                  className="absolute right-4 text-gray-400 hover:text-primary"
                >
                  {showExisting ? <img src="/public/image/closed-eye.jpg" className="w-6"></img> : <img src="/public/image/open-eye.png" className="w-6"></img>}
                </button>
              </div>

              <h6 className="mt-3 font-semibold">New Password</h6>
              <div className="relative flex items-center mt-1">
                <img
                  src="/image/Password.svg"
                  alt=""
                  className="absolute left-4 w-5 h-5 pointer-events-none"
                />
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter Your New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full py-3 pl-12 pr-12 rounded-md border border-gray-200
                    focus:border-primary outline-none transition bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 text-gray-400 hover:text-primary"
                >
                  {showNew ? <img src="/public/image/closed-eye.jpg" className="w-6"></img> : <img src="/public/image/open-eye.png" className="w-6"></img>}
                </button>
              </div>

              <h6 className="mt-3 font-semibold">Confirm New Password</h6>
              <div className="relative flex items-center mt-1">
                <img
                  src="/image/Password.svg"
                  alt=""
                  className="absolute left-4 w-5 h-5 pointer-events-none"
                />
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-Type Your New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full py-3 pl-12 pr-12 rounded-md border
                    focus:border-primary outline-none transition bg-transparent
                    ${confirmPassword && confirmPassword !== newPassword
                      ? "border-red-400"   // merah jika tidak cocok
                      : "border-gray-200"  // normal jika kosong atau cocok
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 text-gray-400 hover:text-primary"
                >
                  {showConfirm ? <img src="/public/image/closed-eye.jpg" className="w-6"></img> : <img src="/public/image/open-eye.png" className="w-6"></img>}
                </button>
              </div>

              {confirmPassword && confirmPassword !== newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  Konfirmasi password tidak cocok!
                </p>
              )}

              <div className="mt-5">
                <ButtonLogin type="submit" disabled={isLoading}>
                  {isLoading?"Menyimpan":"Submit"}
                  </ButtonLogin>
              </div>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default ChangePasswordProfile;