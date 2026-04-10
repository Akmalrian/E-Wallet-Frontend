import { NavLink } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";

function NavigationDashboard() {
  return (
    <nav className="shadow h-[130vh] w-65.5 hidden md:flex">
      <div className="w-52 h-87.5 grid gap-2 p-6 ml-2">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu
            icon="/public/image/dashboard-two (1).svg"
            text="Dashboard"
          />
        </NavLink>
        <NavLink
          to={"/transfer"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/public/image/Send.svg" text="Transfer" />
        </NavLink>
        <NavLink
          to={"/history"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/public/image/history.svg" text="History" />
        </NavLink>
        <NavLink
          to={"/topup"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/public/image/Upload.svg" text="Top Up" />
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/public/image/2 User.svg" text="Profile" />
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "bg-white rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/public/image/Log Out.svg" text="Keluar" />
        </NavLink>
      </div>
    </nav>
  );
}
export default NavigationDashboard;

