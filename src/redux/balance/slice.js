import { createSlice } from '@reduxjs/toolkit';
import { addBalanceThunk } from './thunk';

const initialStateBalance = {
  value: null,
  isLoading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState: initialStateBalance,
  extraReducers: {
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
  },
});

export default balanceSlice.reducer;
