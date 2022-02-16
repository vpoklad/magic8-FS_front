import { createSlice } from "@reduxjs/toolkit";
import { getTransactionsThunk, addNewTransactionThunk , delTransactionThunk} from "./thunk";

const initialStateTransactions = {
  data: [],
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
      state.data = action.payload.transactions;
      state.isLoading = false;
      state.error = null;
    },
    [getTransactionsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addNewTransactionThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [addNewTransactionThunk.fulfilled]: (state, action) => {
      state.data = action.payload.transactions;
      state.isLoading = false;
      state.error = null;
    },
    [addNewTransactionThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [delTransactionThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [delTransactionThunk.fulfilled]: (state, action) => {
      state.data = action.payload.transactions;
      state.isLoading = false;
      state.error = null;
    },
    [delTransactionThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default transactionsSlice.reducer;