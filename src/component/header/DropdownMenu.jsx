import { NavLink } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";

function DropdownMenu() {
  return (
    <nav className="shadow md:h-35.5 w-58.75 bg-white absolute top-20 z-10 rounded-2xl h-80">
      <div className=" grid gap-2 p-6 ml-2">
        <div className="md:hidden grid">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary -ml-5 mr-5 rounded-md text-white "
                : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] ";
            }}
          >
            <ButtonDashboardMenu
              icon="/image/dashboard-two (1).svg"
              text="Dashboard"
            />
          </NavLink>
          <NavLink
            to={"/transfer"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary -ml-5 mr-5 rounded-md text-white "
                : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] ";
            }}
          >
            <ButtonDashboardMenu
              icon="/image/2 User.svg"
              text="Transfer"
            />
          </NavLink>
          <NavLink
            to={"/history"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary -ml-5 mr-5 rounded-md text-white"
                : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] ";
            }}
          >
            <ButtonDashboardMenu
              icon="/image/history.svg"
              text="History"
            />
          </NavLink>
          <NavLink
            to={"/topup"}
            className={({ isActive }) => {
              return isActive
                ? "bg-primary -ml-5 mr-5 rounded-md text-white"
                : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] ";
            }}
          >
            <ButtonDashboardMenu
              icon="/image/Upload.svg"
              text="Top Up"
            />
          </NavLink>
        </div>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary -ml-5 mr-5 rounded-md text-white"
              : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff]";
          }}
        >
          <ButtonDashboardMenu icon="/image/2 User.svg" text="Profile" />
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => {
            return isActive
              ? "bg-primary rounded-md text-white"
              : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff]";
          }}
        >
          <ButtonDashboardMenu icon="/image/Log Out.svg" text="Keluar" />
        </NavLink>
      </div>
    </nav>
  );
}
export default DropdownMenu;
