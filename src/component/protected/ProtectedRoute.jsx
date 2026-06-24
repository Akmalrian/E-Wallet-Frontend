import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../store/hooks";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isLogin, needsPin } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      toast.error("Silahkan login terlebih dahulu");
    }
  }, [isLogin]);

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  if (needsPin) {
    return <Navigate to="/enter-pin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;