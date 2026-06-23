import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfileAPI, updateProfileAPI, changePasswordAPI, changePinAPI } from "../../services/userService";

// Async Thunk Fetch Profile
export const fetchProfileThunk = createAsyncThunk(
  "profile/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProfileAPI();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async Thunk Update Profile
export const updateProfileThunk = createAsyncThunk(
  "profile/update",
  async (profileData, { rejectWithValue }) => {
    try {
      await updateProfileAPI(profileData);
      const response = await getProfileAPI();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async Thunk Change Password
export const changePasswordThunk = createAsyncThunk(
  "profile/changePassword",
  async ({ old_password, new_password }, { rejectWithValue }) => {
    try {
      await changePasswordAPI(old_password, new_password);
      return true;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async Thunk Change PIN
export const changePinThunk = createAsyncThunk(
  "profile/changePin",
  async ({ old_pin, new_pin }, { rejectWithValue }) => {
    try {
      await changePinAPI(old_pin, new_pin);
      return true;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data:      null,
    isLoading: false,
    error:     null,
    success:   null,
  },
  reducers: {
    clearProfileMessages: (state) => {
      state.error   = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    // ── Fetch Profile ──────────────────────────
    builder
      .addCase(fetchProfileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data      = action.payload;
      })
      .addCase(fetchProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });

    // ── Update Profile ─────────────────────────
    builder
      .addCase(updateProfileThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(updateProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data      = action.payload;
        state.success   = "Profile berhasil diupdate!";
      })
      .addCase(updateProfileThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });

    // ── Change Password ────────────────────────
    builder
      .addCase(changePasswordThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(changePasswordThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.success   = "Password berhasil diubah!";
      })
      .addCase(changePasswordThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });

    // ── Change PIN ─────────────────────────────
    builder
      .addCase(changePinThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(changePinThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.success   = "PIN berhasil diubah!";
      })
      .addCase(changePinThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });
  },
});

export const { clearProfileMessages } = profileSlice.actions;
export default profileSlice.reducer;