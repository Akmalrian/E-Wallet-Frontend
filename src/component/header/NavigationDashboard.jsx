import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";
import { useAppDispatch } from "../../store/hooks";
import { logoutUser } from "../../store/slices/authSlice";
import LogoutModal from "../section/LogoutModal";
import toast from "react-hot-toast";
import { logoutAPI } from "../../services/authService";

function NavigationDashboard() {
  const dispatch  = useAppDispatch();
  const navigate  = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsLogoutModalOpen(true);
  };

  const handleLogoutConfirm = async () => {
    try {
      // ✅ Hapus token dari Redis di backend
      await logoutAPI();
    } catch (err) {
      // Tetap logout di frontend meski backend error
      console.error("Logout API error:", err);
    } finally {
      // ✅ Bersihkan Redux state dan localStorage
      dispatch(logoutUser());
      setIsLogoutModalOpen(false);
      toast.success("Berhasil keluar");
      navigate("/login");
    }
  };

  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />

      <nav className="shadow min-h-screen md:h-[130vh] w-full md:w-65.5 hidden md:flex z-50 relative bg-white
        max-md:flex max-md:min-h-0 max-md:h-16 max-md:w-full max-md:fixed">
        <div className="w-52 h-87.5 grid gap-2 p-6 ml-2
          max-md:w-full max-md:h-full max-md:flex max-md:flex-row
          max-md:justify-around max-md:items-center max-md:p-0 max-md:ml-0">

          <NavLink to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "bg-primary rounded-md text-white"
                       : "bg-white rounded-md hover:bg-[#798dff] hover:text-white"
            }>
            <ButtonDashboardMenu icon="/image/dashboard-two (1).svg" text="Dashboard" />
          </NavLink>

          <NavLink to={"/transfer"}
            className={({ isActive }) =>
              isActive ? "bg-primary rounded-md text-white"
                       : "bg-white rounded-md hover:bg-[#798dff] hover:text-white"
            }>
            <ButtonDashboardMenu icon="/image/Send.svg" text="Transfer" />
          </NavLink>

          <NavLink to={"/history"}
            className={({ isActive }) =>
              isActive ? "bg-primary rounded-md text-white"
                       : "bg-white rounded-md hover:bg-[#798dff] hover:text-white"
            }>
            <ButtonDashboardMenu icon="/image/history.svg" text="History" />
          </NavLink>

          <NavLink to={"/topup"}
            className={({ isActive }) =>
              isActive ? "bg-primary rounded-md text-white"
                       : "bg-white rounded-md hover:bg-[#798dff] hover:text-white"
            }>
            <ButtonDashboardMenu icon="/image/Upload.svg" text="Top Up" />
          </NavLink>

          <NavLink to={"/profile"}
            className={({ isActive }) =>
              isActive ? "bg-primary rounded-md text-white"
                       : "bg-white rounded-md hover:bg-[#798dff] hover:text-white"
            }>
            <ButtonDashboardMenu icon="/image/2 User.svg" text="Profile" />
          </NavLink>

          <div
            onClick={handleLogoutClick}
            className="bg-white rounded-md hover:bg-[#ff5e49] hover:text-white
              max-md:flex max-md:flex-col max-md:items-center max-md:px-3 max-md:py-2">
            <ButtonDashboardMenu icon="/image/Log Out.svg" text="Keluar" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationDashboard;