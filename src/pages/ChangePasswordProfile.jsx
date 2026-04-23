import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ButtonLogin from "../component/button/ButtonLogin";
import NavigationDashboard from "../component/header/NavigationDashboard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changePassword, resetRegister } from "../store/slices/registerSlice";
import toast from "react-hot-toast";

function ChangePasswordProfile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAppSelector((state) => state.auth);
  const { isSuccess, error } = useAppSelector((state) => state.register);

  // State untuk setiap input
  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Toggle show/hide password
  const [showExisting, setShowExisting] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reaksi terhadap perubahan state Redux
  useEffect(() => {
    if (isSuccess) {
      toast.success("Password berhasil diubah!");
      dispatch(resetRegister());
      navigate("/profile");
    }
    if (error) {
      toast.error(error);
      dispatch(resetRegister());
    }
  }, [isSuccess, error, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form di sisi client sebelum dispatch

    // 1. Semua field harus diisi
    if (!existingPassword || !newPassword || !confirmPassword) {
      toast.error("Semua field harus diisi!");
      return;
    }

    // 2. Password baru minimal 6 karakter
    if (newPassword.length < 6) {
      toast.error("Password baru minimal 6 karakter!");
      return;
    }

    // 3. Konfirmasi password harus sama
    if (newPassword !== confirmPassword) {
      toast.error("Konfirmasi password tidak cocok!");
      return;
    }

    // 4. Dispatch ke Redux — validasi password lama dilakukan di slice
    dispatch(changePassword({
      username: currentUser.username,
      existingPassword,
      newPassword,
    }));
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

              {/* New Password */}
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

              {/* Confirm New Password */}
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

              {/* Pesan jika konfirmasi tidak cocok */}
              {confirmPassword && confirmPassword !== newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  Konfirmasi password tidak cocok!
                </p>
              )}

              <div className="mt-5">
                <ButtonLogin type="submit">Submit</ButtonLogin>
              </div>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

export default ChangePasswordProfile;