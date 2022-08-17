import { createSlice } from '@reduxjs/toolkit';
import { getReportThunk } from './thunk';

const initialStateReport = {
  data: null,
  isLoading: false,
  error: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState: initialStateReport,
  extraReducers: {
    [getReportThunk.pending]: (state, _) => {
      state.isLoading = true;
    },
    [getReportThunk.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    [getReportThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default reportsSlice.reducer;
