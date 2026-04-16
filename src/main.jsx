import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AppRouter from './AppRouter'
import LandingPage from './pages/LandingPage'
import ContentForgotPassword from './component/ContentForgotPassword'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import Dashboard from './pages/Dashboard'
import { Toaster } from 'react-hot-toast'
import store from './store/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Toaster position="top-center" />
    <AppRouter />
    </Provider>
  </StrictMode>,
)