import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    users: [],        // ← tetap ada untuk fitur lokal yang masih pakai
    isSuccess: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
      state.error     = null;
      state.isSuccess = false;
    },

    // ← DIUBAH: bisa dipanggil tanpa payload (untuk API)
    //           atau dengan payload (untuk lokal)
    registerSuccess: (state, action) => {
      // Jika ada payload (lokal) → simpan ke users[]
      if (action.payload) {
        const newUser = {
          ...action.payload,
          pin:                "",
          balance:            0,
          income:             0,
          expense:            0,
          fullName:           "",
          phone:              "",
          email:              action.payload.username,
          avatar:             null,
          transactionHistory: [],
        };
        state.users.push(newUser);
      }
      // Jika tidak ada payload (API) → hanya update state
      state.isLoading = false;
      state.isSuccess = true;
      state.error     = null;
    },

    registerFailed: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error     = action.payload;
    },

    resetRegister: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.error     = null;
    },

    // ← semua reducer lama tetap dipertahankan
    updateUserProfile: (state, action) => {
      const { username, fullName, phone, email, avatar } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        if (fullName !== undefined) state.users[index].fullName = fullName;
        if (phone !== undefined)    state.users[index].phone    = phone;
        if (email !== undefined)    state.users[index].email    = email;
        if (avatar !== undefined)   state.users[index].avatar   = avatar;
      }
    },

    changePasswordByEmail: (state, action) => {
      const { username, newPassword } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        state.users[index].password = newPassword;
        state.isSuccess = true;
        state.error     = null;
      } else {
        state.isSuccess = false;
        state.error     = "Email tidak ditemukan!";
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
        state.users[index].income  += amount;
      }
    },

    deductBalance: (state, action) => {
      const { username, amount } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        if (state.users[index].balance >= amount) {
          state.users[index].balance -= amount;
          state.users[index].expense += amount;
        } else {
          state.error = "Saldo tidak mencukupi!";
        }
      }
    },

    changePassword: (state, action) => {
      const { username, existingPassword, newPassword } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index === -1) {
        state.error     = "User tidak ditemukan!";
        state.isSuccess = false;
        return;
      }
      if (state.users[index].password !== existingPassword) {
        state.error     = "Password lama tidak sesuai!";
        state.isSuccess = false;
        return;
      }
      if (existingPassword === newPassword) {
        state.error     = "Password baru tidak boleh sama dengan password lama!";
        state.isSuccess = false;
        return;
      }
      state.users[index].password = newPassword;
      state.isSuccess = true;
      state.error     = null;
    },

    changePin: (state, action) => {
      const { username, newPin } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index === -1) {
        state.error     = "User tidak ditemukan!";
        state.isSuccess = false;
        return;
      }
      if (state.users[index].pin === newPin) {
        state.error     = "PIN baru tidak boleh sama dengan PIN lama!";
        state.isSuccess = false;
        return;
      }
      state.users[index].pin = newPin;
      state.isSuccess = true;
      state.error     = null;
    },

    addTransaction: (state, action) => {
      const { username, transaction } = action.payload;
      const index = state.users.findIndex((u) => u.username === username);
      if (index !== -1) {
        if (!state.users[index].transactionHistory) {
          state.users[index].transactionHistory = [];
        }
        state.users[index].transactionHistory.unshift({
          id:   Date.now(),
          ...transaction,
          date: new Date().toISOString(),
        });
      }
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailed,
  resetRegister,
  changePasswordByEmail,
  savePinToUser,
  addBalance,
  deductBalance,
  updateUserProfile,
  changePassword,
  changePin,
  addTransaction,
} = registerSlice.actions;

export default registerSlice.reducer;