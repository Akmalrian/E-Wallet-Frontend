import { NavLink } from "react-router";
import ButtonDashboardMenu from "../button/ButtonDashboardMenu";

function DropdownMenu() {
  return (
    <nav className="shadow md:h-[142px] w-[235px] bg-white absolute top-20 z-10 rounded-2xl h-[400px]">
      <div className=" grid gap-2 p-6 ml-2">
        <div className="md:hidden">
          <NavLink
            to={"/transfer"}
            className={({ isActive }) => {
              return isActive
                ? "bg-[#2948FF] -ml-5 mr-5 rounded-md text-white"
                : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] hover:text-white";
            }}
          >
            <ButtonDashboardMenu
              icon="/public/image/2 User.svg"
              text="Transfer"
            />
          </NavLink>
          <NavLink
            to={"/history"}
            className={({ isActive }) => {
              return isActive
                ? "bg-[#2948FF] rounded-md text-white"
                : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] hover:text-white";
            }}
          >
            <ButtonDashboardMenu
              icon="/public/image/Log Out.svg"
              text="History"
            />
          </NavLink>
          <NavLink
            to={"/topup"}
            className={({ isActive }) => {
              return isActive
                ? "bg-[#2948FF] rounded-md text-white"
                : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] hover:text-white";
            }}
          >
            <ButtonDashboardMenu
              icon="/public/image/Log Out.svg"
              text="Top Up"
            />
          </NavLink>
        </div>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] -ml-5 mr-5 rounded-md text-white"
              : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/public/image/2 User.svg" text="Profile" />
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => {
            return isActive
              ? "bg-[#2948FF] rounded-md text-white"
              : "bg-white -ml-5 mr-5 rounded-md hover:bg-[#798dff] hover:text-white";
          }}
        >
          <ButtonDashboardMenu icon="/public/image/Log Out.svg" text="Keluar" />
        </NavLink>
      </div>
    </nav>
  );
}
export default DropdownMenu;
