import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isLogin: false,
    needsPin: false, 
    error: null,
    success: null,
  },
  reducers: {
    loginUser: (state, action) => {
      const { username, password, users } = action.payload;
      const found = users.find(
        (u) => u.username === username && u.password === password
      );
      if (found) {
        state.currentUser = found;
        state.isLogin = true;
        state.needsPin = !found.pin || found.pin === "";
        state.error = null;
        state.success = "Login Berhasil!";
      } else {
        state.isLogin = false;
        state.needsPin = false;
        state.error = "Email atau Password Salah!";
        state.success = null;
      }
    },

    syncCurrentUser: (state, action) => {
      const updatedUser = action.payload;
      state.currentUser = updatedUser;
      state.needsPin = !updatedUser.pin || updatedUser.pin === "";
    },

    pinSaved: (state) => {
      state.needsPin = false;
    },

    updateProfile: (state, action) => {
      const { fullName, phone, email, avatar } = action.payload;
      if (state.currentUser) {
        if (fullName !== undefined) state.currentUser.fullName = fullName;
        if (phone !== undefined) state.currentUser.phone = phone;
        if (email !== undefined) state.currentUser.email = email;
        if (avatar !== undefined) state.currentUser.avatar = avatar;
        state.success = "Profile berhasil diupdate!";
        state.error = null;
      }
    },

    logoutUser: (state) => {
      state.currentUser = null;
      state.isLogin = false;
      state.needsPin = false;
      state.error = null;
      state.success = null;
    },

    clearMessages: (state) => {
      state.error = null;
      state.success = null;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  updateProfile,
  syncCurrentUser,
  pinSaved,
  clearMessages,
} = authSlice.actions;

export default authSlice.reducer;