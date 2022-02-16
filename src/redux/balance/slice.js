import { createSlice } from '@reduxjs/toolkit';
import { addBalanceThunk, getBalanceThunk } from './thunk';
import { delTransactionThunk, addNewTransactionThunk } from '../transactions/thunk';

const initialStateBalance = {
  value: null,
  isLoading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState: initialStateBalance,
  extraReducers: {
    [getBalanceThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [getBalanceThunk.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getBalanceThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addBalanceThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [addBalanceThunk.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [addBalanceThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [delTransactionThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [delTransactionThunk.fulfilled]: (state, action) => {
      state.value = action.payload.balance;
      state.isLoading = false;
      state.error = null;
    },
    [delTransactionThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addNewTransactionThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [addNewTransactionThunk.fulfilled]: (state, action) => {
      state.value = action.payload.balance;
      state.isLoading = false;
      state.error = null;
    },
    [addNewTransactionThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default balanceSlice.reducer;
