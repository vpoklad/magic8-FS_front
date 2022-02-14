import { createSlice } from "@reduxjs/toolkit";
import { getTransactionsThunk } from "./thunk";

const initialStateTransactions = {
  data: {},
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialStateTransactions,
  extraReducers: {
    [getTransactionsThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [getTransactionsThunk.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    [getTransactionsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default transactionsSlice.reducer;