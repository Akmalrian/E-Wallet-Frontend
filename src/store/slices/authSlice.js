import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    token: null,        // ← BARU: simpan JWT token
    isLogin: false,
    needsPin: false,
    // ← BARU: state dashboard
    dashboard: {
      balance:       0,
      total_income:  0,
      total_expense: 0,
    },
    error:   null,
    success: null,
  },
  reducers: {

    // ← BARU: dipanggil saat login API berhasil
    loginSuccess: (state, action) => {
      const { token, user, has_pin } = action.payload;
      state.token       = token;
      state.currentUser = user;
      state.isLogin     = true;
      state.needsPin    = !has_pin;
      state.error       = null;
      state.success     = "Login Berhasil!";
      localStorage.setItem("token", token);
    },

    // ← BARU: dipanggil saat login API gagal
    loginFailed: (state, action) => {
      state.isLogin  = false;
      state.needsPin = false;
      state.error    = action.payload;
      state.success  = null;
    },

    // ← LAMA: tetap dipertahankan (dipakai komponen lain)
    loginUser: (state, action) => {
      const { username, password, users } = action.payload;
      const found = users.find(
        (u) => u.username === username && u.password === password
      );
      if (found) {
        state.currentUser = found;
        state.isLogin     = true;
        state.needsPin    = !found.pin || found.pin === "";
        state.error       = null;
        state.success     = "Login Berhasil!";
      } else {
        state.isLogin  = false;
        state.needsPin = false;
        state.error    = "Email atau Password Salah!";
        state.success  = null;
      }
    },

    // ← LAMA: tetap dipertahankan
    syncCurrentUser: (state, action) => {
      const updatedUser = action.payload;
      state.currentUser = updatedUser;
      state.needsPin    = !updatedUser.pin || updatedUser.pin === "";
    },

    // ← LAMA: tetap dipertahankan
    pinSaved: (state) => {
      state.needsPin = false;
    },

    updateProfile: (state, action) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
        state.success     = "Profile berhasil diupdate!";
        state.error       = null;
      }
    },

    // ← LAMA: tetap dipertahankan
    logoutUser: (state) => {
      state.currentUser = null;
      state.token       = null;
      state.isLogin     = false;
      state.needsPin    = false;
      state.dashboard   = { balance: 0, total_income: 0, total_expense: 0 };
      state.error       = null;
      state.success     = null;
      localStorage.removeItem("token");
    },

    // ← BARU: set data dashboard dari API
    setDashboard: (state, action) => {
      state.dashboard = {
        balance:       action.payload.balance,
        total_income:  action.payload.total_income,
        total_expense: action.payload.total_expense,
      };
    },

    // ← LAMA: tetap dipertahankan
    clearMessages: (state) => {
      state.error   = null;
      state.success = null;
    },
  },
});

export const {
  loginSuccess,   // ← BARU
  loginFailed,    // ← BARU
  loginUser,      // ← LAMA (tetap ada)
  logoutUser,
  updateProfile,
  syncCurrentUser,
  pinSaved,
  setDashboard,   // ← BARU
  clearMessages,
} = authSlice.actions;

export default authSlice.reducer;