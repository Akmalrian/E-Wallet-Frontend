import { NavLink } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";

function NavigationDashboard() {
  return (
    <nav className="shadow h-[130vh]">
      <div className="w-[208px] h-[350px] grid gap-2 p-6 ml-2">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu
            icon="/src/assets/dashboard-two (1).svg"
            text="Dashboard"
          />
        </NavLink>
        <NavLink
          to={"/transfer"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/src/assets/Send.svg" text="Transfer" />
        </NavLink>
        <NavLink
          to={"/history"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/src/assets/history.svg" text="History" />
        </NavLink>
        <NavLink
          to={"/topup"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/src/assets/Upload.svg" text="Top Up" />
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/src/assets/2 User.svg" text="Profile" />
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/src/assets/Log Out.svg" text="Keluar" />
        </NavLink>
      </div>
    </nav>
  );
}
export default NavigationDashboard;
