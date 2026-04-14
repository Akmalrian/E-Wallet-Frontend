import { Outlet } from "react-router";
import HeaderDashboard from "../component/header/HeaderDashboard";

const MainLayout = () => {
  return (
    <div>
      <HeaderDashboard />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;