import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    users: [],
    isSuccess: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },

    updateUserProfile: (state, action) => {
      const { username, fullName, phone, email, avatar } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        if (fullName !== undefined) state.users[index].fullName = fullName;
        if (phone !== undefined) state.users[index].phone = phone;
        if (email !== undefined) state.users[index].email = email;
        if (avatar !== undefined) state.users[index].avatar = avatar;
      }
    },

    registerSuccess: (state, action) => {
      const newUser = {
        ...action.payload,
        pin: "",
        balance: 0,
        fullName: "",
        phone: "",
        email: action.payload.username,
        avatar: null,
      };
      state.users.push(newUser);
      state.isLoading = false;
      state.isSuccess = true;
      state.error = null;
    },

    registerFailed: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },

    resetRegister: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.error = null;
    },

    resetPasswordToDefault: (state, action) => {
      const { username } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        state.users[index].password = "qwerty"; // password default
        state.isSuccess = true;
        state.error = null;
      } else {
        state.isSuccess = false;
        state.error = "Email tidak ditemukan!";
      }
    },

    savePinToUser: (state, action) => {
      const { username, pin } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        state.users[index].pin = pin;
      }
    },

    addBalance: (state, action) => {
      const { username, amount } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        state.users[index].balance += amount;
      }
    },

    deductBalance: (state, action) => {
      const { username, amount } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        if (state.users[index].balance >= amount) {
          state.users[index].balance -= amount;
        } else {
          state.error = "Saldo tidak mencukupi!";
        }
      }
    },

    changePassword: (state, action) => {
      const { username, existingPassword, newPassword } = action.payload;

      const index = state.users.findIndex((u) => u.username === username);

      if (index === -1) {
        state.error = "User tidak ditemukan!";
        state.isSuccess = false;
        return;
      }

      if (state.users[index].password !== existingPassword) {
        state.error = "Password lama tidak sesuai!";
        state.isSuccess = false;
        return;
      }

      if (existingPassword === newPassword) {
        state.error = "Password baru tidak boleh sama dengan password lama!";
        state.isSuccess = false;
        return;
      }

      state.users[index].password = newPassword;
      state.isSuccess = true;
      state.error = null;
    },
    // Tambahkan di dalam reducers: {}
    changePin: (state, action) => {
      const { username, newPin } = action.payload;

      // Cari user berdasarkan username
      const index = state.users.findIndex((u) => u.username === username);

      if (index === -1) {
        state.error = "User tidak ditemukan!";
        state.isSuccess = false;
        return;
      }

      // Cek apakah PIN baru sama dengan PIN lama
      if (state.users[index].pin === newPin) {
        state.error = "PIN baru tidak boleh sama dengan PIN lama!";
        state.isSuccess = false;
        return;
      }

      // Semua validasi lolos → ganti PIN
      state.users[index].pin = newPin;
      state.isSuccess = true;
      state.error = null;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailed,
  resetRegister,
  resetPasswordToDefault,
  savePinToUser,
  addBalance,
  deductBalance,
  updateUserProfile,
  changePassword,
  changePin,
} = registerSlice.actions;

export default registerSlice.reducer;