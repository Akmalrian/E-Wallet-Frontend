import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHistoryAPI } from "../../services/dashboardService";
import { topupAPI, transferAPI } from "../../services/transactionService";

// Async Thunk Fetch History
export const fetchHistoryThunk = createAsyncThunk(
  "transaction/fetchHistory",
  async (params, { rejectWithValue }) => {
    try {
      const response = await getHistoryAPI(params);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async Thunk Top Up
export const createTopupThunk = createAsyncThunk(
  "transaction/topup",
  async ({ payment_method_id, order_amount }, { rejectWithValue }) => {
    try {
      const response = await topupAPI(payment_method_id, order_amount);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Async Thunk Transfer
export const createTransferThunk = createAsyncThunk(
  "transaction/transfer",
  async ({ receiver_wallet_id, amount, pin, notes }, { rejectWithValue }) => {
    try {
      const response = await transferAPI(receiver_wallet_id, amount, pin, notes);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    histories:   [],
    totalData:   0,
    totalPages:  0,
    isLoading:   false,
    error:       null,
    success:     null,
  },
  reducers: {
    clearTransactionMessages: (state) => {
      state.error   = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    // ── Fetch History ──────────────────────────
    builder
      .addCase(fetchHistoryThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(fetchHistoryThunk.fulfilled, (state, action) => {
        state.isLoading  = false;
        state.histories  = action.payload.transactions   || [];
        state.totalData  = action.payload.meta?.total_data   || 0;
        state.totalPages = action.payload.meta?.total_pages  || 0;
      })
      .addCase(fetchHistoryThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });

    // ── Top Up ─────────────────────────────────
    builder
      .addCase(createTopupThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(createTopupThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.success   = "Top Up berhasil!";
      })
      .addCase(createTopupThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });

    // ── Transfer ───────────────────────────────
    builder
      .addCase(createTransferThunk.pending, (state) => {
        state.isLoading = true;
        state.error     = null;
      })
      .addCase(createTransferThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.success   = "Transfer berhasil!";
      })
      .addCase(createTransferThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error     = action.payload;
      });
  },
});

export const { clearTransactionMessages } = transactionSlice.actions;
export default transactionSlice.reducer;