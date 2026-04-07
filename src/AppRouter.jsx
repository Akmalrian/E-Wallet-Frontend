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

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot+password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/history" element={<History />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/nominal" element={<TransferSetNominal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;