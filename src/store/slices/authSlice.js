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

    // ✅ BARU: update profile user yang sedang login
    updateProfile: (state, action) => {
      const { fullName, phone, email, avatar } = action.payload;

      // Update currentUser
      if (state.currentUser) {
        if (fullName !== undefined) state.currentUser.fullName = fullName;
        if (phone !== undefined) state.currentUser.phone = phone;
        if (email !== undefined) state.currentUser.email = email;
        if (avatar !== undefined) state.currentUser.avatar = avatar;

        // Simpan currentUser yang sudah diupdate ke localStorage
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));

        // Update juga di array users agar persistent saat login ulang
        const index = state.users.findIndex(
          (u) => u.username === state.currentUser.username
        );
        if (index !== -1) {
          state.users[index] = { ...state.users[index], ...state.currentUser };
          localStorage.setItem("users", JSON.stringify(state.users));
        }

        state.success = "Profile berhasil diupdate!";
        state.error = null;
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

export const { loginUser, registerUser, logoutUser, updateProfile, clearMessages } =
  authSlice.actions;
export default authSlice.reducer;