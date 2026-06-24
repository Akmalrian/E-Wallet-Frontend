import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../store/hooks";

// Halaman login, register — tidak bisa diakses jika sudah login
const PublicRoute = () => {
  const { isLogin, needsPin } = useAppSelector((state) => state.auth);

  if (isLogin && needsPin) {
    return <Navigate to="/enter-pin" replace />;
  }

  if (isLogin && !needsPin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;