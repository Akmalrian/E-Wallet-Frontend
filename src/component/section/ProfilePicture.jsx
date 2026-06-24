import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import ButtonLogin from "../button/ButtonLogin";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateProfile, clearMessages } from "../../store/slices/authSlice";
import { updateProfileAPI, getProfileAPI } from "../../services/userService";
import toast from "react-hot-toast";

function ProfilePicture() {
  const dispatch = useAppDispatch();
  const { currentUser, success, error } = useAppSelector((state) => state.auth);

  const [fullName, setFullName]         = useState(currentUser?.fullname     || "");
  const [phone, setPhone]               = useState(currentUser?.phone_number || "");
  const [email]               = useState(currentUser?.email        || "");
  const [avatarPreview, setAvatarPreview] = useState(
    currentUser?.photo_path
      ? `http://localhost:9000/ewallet${currentUser.photo_path}`
      : null
  );
  const [photoFile, setPhotoFile]       = useState(null);
  const [isLoading, setIsLoading]       = useState(false);
  const fileInputRef                    = useRef(null);

  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch(clearMessages());
    }
    if (error) {
      toast.error(error);
      dispatch(clearMessages());
    }
  }, [success, error, dispatch]);

  const handleChangeProfile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validasi tipe file
    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      toast.error("Hanya file JPG dan PNG yang diizinkan!");
      return;
    }

    // Validasi ukuran (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Ukuran file terlalu besar! Maksimal 2MB.");
      return;
    }

    // Simpan file untuk upload nanti
    setPhotoFile(file);

    // Preview foto
    const reader = new FileReader();
    reader.onloadend = () => setAvatarPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleDeleteProfile = () => {
    setAvatarPreview(null);
    setPhotoFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      //  Kirim ke backend
      await updateProfileAPI({
        fullname:     fullName,
        phone_number: phone,
        photo:        photoFile, // null jika tidak ganti foto
      });

      //  Ambil profile terbaru dari backend
      const profileResponse = await getProfileAPI();
      const updatedUser     = profileResponse.data;

      //  Update Redux state dengan data terbaru
      dispatch(updateProfile({
        fullname:     updatedUser.fullname,
        phone_number: updatedUser.phone_number,
        photo_path:   updatedUser.photo_path,
        email:        updatedUser.email,
      }));

      toast.success("Profile berhasil diupdate!");

    } catch (err) {
      toast.error(err.message || "Gagal update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-6 text-medium font-montserrat">
      <div className="flex mx-4 items-center font-semibold gap-4 mb-8">
        <img src="/image/2User.svg" alt="icon history" />
        <p>Profile</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-4 w-280 md:h-198 h-auto justify-between shadow max-md:w-auto max-md:h-auto max-md:mx-4 max-md:pb-28"
      >
        <div>
          <p className="font-semibold px-10 py-5">Profile Picture</p>
        </div>

        <div>
          <div className="ml-10 mr-10 max-md:ml-4 max-md:mr-4">

            <div className="flex justify-between items-center h-28.75 w-full
              max-md:h-auto max-md:py-4 max-md:flex-col max-md:items-start max-md:gap-4">
              <div className="flex items-center max-md:flex-col max-md:items-center max-md:w-full max-md:gap-4">

                <div className="w-32 h-32 bg-[#E8E8E84D] flex justify-center items-center overflow-hidden rounded-md">
                  {avatarPreview ? (
                    <img
                      className="w-full h-full object-cover"
                      src={avatarPreview}
                      alt="Profile"
                    />
                  ) : (
                    <img
                      className="w-12 h-12"
                      src="/image/UserNone.svg"
                      alt="Photo none"
                    />
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpg,image/jpeg,image/png"
                  className="hidden"
                  onChange={handleFileChange}
                />

                <div className="ml-5 grid gap-2 text-[14px] max-md:ml-0 max-md:w-full max-md:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleChangeProfile}
                    className="flex border bg-primary h-11 w-40 items-center max-md:order-last gap-2 rounded-[5px] hover:bg-blue-800 transition text-white
                    max-md:w-full max-md:justify-center"
                  >
                    <img className="w-6 h-6 ml-2" src="/image/Edit Square.svg" alt="icon edit" />
                    Change Profile
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteProfile}
                    className="flex mr-4 border border-red-600 text-red-600 h-11 w-40 items-center gap-2 rounded-[5px] hover:bg-gray-300 transition
                    max-md:w-full max-md:mr-0 max-md:justify-center"
                  >
                    <img className="w-6 h-6 ml-2" src="/image/Delete.svg" alt="icon delete" />
                    Delete Profile
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 text-secondary">
              The profile picture must be 512 x 512 pixels or less
            </p>

            <h6 className="mt-5 font-bold">Full Name</h6>
            <div className="w-full mt-1">
              <div className="relative flex items-center">
                <img src="/image/UserNone.svg" alt="" className="absolute left-4 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-md border border-gray-200 focus:border-primary outline-none transition bg-transparent"
                />
              </div>
            </div>

            <h6 className="mt-5 font-bold">Phone</h6>
            <div className="w-full mt-1">
              <div className="relative flex items-center">
                <img src="/image/Phone.svg" alt="" className="absolute left-4 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Enter Your Number Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 rounded-md border border-gray-200 focus:border-primary outline-none transition bg-transparent"
                />
              </div>
            </div>

            <h6 className="mt-5 font-bold">Email</h6>
            <div className="w-full mt-1">
              <div className="relative flex items-center">
                <img src="/image/mail.png" alt="" className="absolute left-4 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  value={email}
                  disabled // ← email tidak bisa diubah
                  className="w-full py-3 pl-12 pr-4 rounded-md border border-gray-200 outline-none bg-gray-50 text-gray-400 cursor-not-allowed"
                />
              </div>
            </div>

            <h6 className="mt-4 font-bold">Password</h6>
            <p className="mt-1 mb-4 text-primary">
              <Link to="password-profile">Change Password</Link>
            </p>

            <h6 className="mt-4 font-bold">Pin</h6>
            <p className="mt-1 mb-8 text-primary">
              <Link to="pin-profile">Change Pin</Link>
            </p>

            <ButtonLogin type="submit" disabled={isLoading}>
              {isLoading ? "Menyimpan..." : "Submit"}
            </ButtonLogin>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ProfilePicture;