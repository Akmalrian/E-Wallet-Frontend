import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI, logoutAPI, enterPinAPI } from "../../services/authService";

// Async Thunk Login
export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginAPI(email, password);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async Thunk Register
export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await registerAPI(email, password);
      return true;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async Thunk Logout
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  // eslint-disable-next-line no-unused-vars
  async (_, { rejectWithValue }) => {
    try {
      await logoutAPI();
      return true;
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      // Tetap logout lokal meski API gagal
      return true;
    }
  }
);

// Async Thunk Enter PIN
export const enterPinThunk = createAsyncThunk(
  "auth/enterPin",
  async ({ pin }, { rejectWithValue }) => {
    try {
      await enterPinAPI(pin);
      return true;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    token:       null,
    isLogin:     false,
    needsPin:    false,
    dashboard: {
      balance:       0,
      total_income:  0,
      total_expense: 0,
    },
    isLoading: false,
    error:     null,
    success:   null,
  },
  reducers: {
    updateProfile: (state, action) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    setDashboard: (state, action) => {
      state.dashboard = {
        balance:       action.payload.balance,
        total_income:  action.payload.total_income,
        total_expense: action.payload.total_expense,
      };
    },
    pinSaved: (state) => {
      state.needsPin = false;
    },
    clearMessages: (state) => {
      state.error   = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    // ── Login ──────────────────────────────────
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        const { token, user, has_pin } = action.payload;
        state.token       = token;
        state.currentUser = user;
        state.isLogin     = true;
        state.needsPin    = !has_pin;
        state.isLoading   = false;
        state.success     = "Login Berhasil!";
        state.error       = null;
        localStorage.setItem("token", token);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
        state.isLogin   = false;
      });

    // ── Register ───────────────────────────────
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.success   = "Registrasi berhasil! Silahkan login.";
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });

    // ── Logout ─────────────────────────────────
    builder
      .addCase(logoutThunk.fulfilled, (state) => {
        state.currentUser = null;
        state.token       = null;
        state.isLogin     = false;
        state.needsPin    = false;
        state.dashboard   = { balance: 0, total_income: 0, total_expense: 0 };
        state.error       = null;
        state.success     = null;
        localStorage.removeItem("token");
      });

    // ── Enter PIN ──────────────────────────────
    builder
      .addCase(enterPinThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(enterPinThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.needsPin  = false;
        state.success   = "PIN berhasil disimpan!";
      })
      .addCase(enterPinThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });
  },
});

export const {
  updateProfile,
  setDashboard,
  pinSaved,
  clearMessages,
} = authSlice.actions;

export default authSlice.reducer;