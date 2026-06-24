import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../store/hooks";

// Enter PIN — hanya bisa diakses saat login + belum set PIN
const PinRoute = () => {
  const { isLogin, needsPin } = useAppSelector((state) => state.auth);

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  if (isLogin && !needsPin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PinRoute;