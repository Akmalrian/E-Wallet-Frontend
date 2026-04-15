import { createSlice } from "@reduxjs/toolkit";

const getUsersFromStorage = () =>
  JSON.parse(localStorage.getItem("users")) || [];

const getCurrentUserFromStorage = () =>
  JSON.parse(localStorage.getItem("currentUser")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: getCurrentUserFromStorage(),
    users: getUsersFromStorage(),
    error: null,
    success: null,
  },
  reducers: {
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const found = state.users.find(
        (u) => u.username === username && u.password === password
      );
      if (found) {
        state.currentUser = found;
        state.error = null;
        state.success = "Login Berhasil!";
        localStorage.setItem("currentUser", JSON.stringify(found));
      } else {
        state.error = "Email atau Password Salah!";
        state.success = null;
      }
    },

    registerUser: (state, action) => {
      const { username, password } = action.payload;
      const isTaken = state.users.some((u) => u.username === username);
      if (isTaken) {
        state.error = "Email Sudah Digunakan! Silahkan Pilih Yang Lain.";
        state.success = null;
      } else {
        const newUser = { username, password };
        state.users.push(newUser);
        state.error = null;
        state.success = "Registrasi Berhasil!";
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },

    logoutUser: (state) => {
      state.currentUser = null;
      state.error = null;
      state.success = null;
      localStorage.removeItem("currentUser");
    },

    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },
});

export const { loginUser, registerUser, logoutUser, clearMessages } =
  authSlice.actions;
export default authSlice.reducer;