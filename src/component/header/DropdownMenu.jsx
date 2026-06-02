import { NavLink, useNavigate } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";
import { useAppDispatch } from "../../store/hooks";
import { logoutUser } from "../../store/slices/authSlice";
import toast from "react-hot-toast";
import { logoutAPI } from "../../services/authservice";

function DropdownMenu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // ✅ Hapus token dari Redis di backend
      await logoutAPI();
    } catch (err) {
      console.error("Logout API error:", err);
    } finally {
      // ✅ Bersihkan Redux state dan localStorage
      dispatch(logoutUser());
      toast.success("Berhasil keluar");
      navigate("/login");
    }
  };

  return (
    <nav className="shadow md:h-35.5 w-58.75 bg-white absolute top-20 z-10 right-5 rounded-2xl h-80">
      <div className="grid gap-2 p-6 ml-2">
        <div className="md:hidden grid">
          <NavLink to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "bg-primary -ml-5 mr-5 rounded-md text-white"
                       : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff]"
            }>
            <ButtonDashboardMenu icon="/image/dashboard-two (1).svg" text="Dashboard" />
          </NavLink>
          <NavLink to={"/transfer"}
            className={({ isActive }) =>
              isActive ? "bg-primary -ml-5 mr-5 rounded-md text-white"
                       : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff]"
            }>
            <ButtonDashboardMenu icon="/image/2 User.svg" text="Transfer" />
          </NavLink>
          <NavLink to={"/history"}
            className={({ isActive }) =>
              isActive ? "bg-primary -ml-5 mr-5 rounded-md text-white"
                       : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff]"
            }>
            <ButtonDashboardMenu icon="/image/history.svg" text="History" />
          </NavLink>
          <NavLink to={"/topup"}
            className={({ isActive }) =>
              isActive ? "bg-primary -ml-5 mr-5 rounded-md text-white"
                       : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff]"
            }>
            <ButtonDashboardMenu icon="/image/Upload.svg" text="Top Up" />
          </NavLink>
        </div>

        <NavLink to={"/profile"}
          className={({ isActive }) =>
            isActive ? "bg-primary -ml-5 mr-5 rounded-md text-white"
                     : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff]"
          }>
          <ButtonDashboardMenu icon="/image/2 User.svg" text="Profile" />
        </NavLink>

        {/* ✅ Pakai button bukan NavLink agar tidak ikut active state */}
        <button
          onClick={handleLogout}
          className="bg-white -ml-5 mr-5 rounded-md hover:bg-[#ff5e49] hover:text-white text-left">
          <ButtonDashboardMenu icon="/image/Log Out.svg" text="Keluar" />
        </button>
      </div>
    </nav>
  );
}

export default DropdownMenu;