import { createSlice } from '@reduxjs/toolkit';
import { summaryThunk } from './thunk';

const initialStateBalance = {
  sumArray: null,
  isLoading: false,
  error: null,
};

const summarySlice = createSlice({
  name: 'summary',
  initialState: initialStateBalance,
  extraReducers: {
    [summaryThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [summaryThunk.fulfilled]: (state, action) => {
      state.sumArray = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [summaryThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default summarySlice.reducer;
