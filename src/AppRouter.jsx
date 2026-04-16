import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Transfer from "./pages/Transfer";
import TopUp from "./pages/TopUp";
import Profile from "./pages/Profile";
import TransferSetNominal from "./pages/TransferSetNominal";
import ChangePinProfile from "./pages/ChangePinProfile";
import ChangePasswordProfile from "./pages/ChangePasswordProfile";
import MainLayout from "./layout/MainLayout";
import EnterPin from "./pages/EnterPin";
import ProtectedRoute from "./component/protected/ProtectedRoute";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login">
          <Route index element={<LoginPage />} />
          <Route path="forgot-password">
            <Route index element={<ForgotPasswordPage />} />
            <Route path="enter-pin" element={<EnterPin />} />
          </Route>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfer">
              <Route index element={<Transfer />} />
              <Route path="nominal" element={<TransferSetNominal />} />
            </Route>
            <Route path="/topup" element={<TopUp />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile">
              <Route index element={<Profile />} />
              <Route path="pin-profile" element={<ChangePinProfile />} />
              <Route
                path="password-profile"
                element={<ChangePasswordProfile />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
