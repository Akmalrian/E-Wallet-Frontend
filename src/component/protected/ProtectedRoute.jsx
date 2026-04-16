import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../store/hooks";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isLogin } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      toast.error("Telah Log Out");
    }
  }, [isLogin]);

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
