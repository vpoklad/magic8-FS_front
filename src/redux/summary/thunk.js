import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSummary } from '../../services';

export const summaryThunk = createAsyncThunk(
  'summary/get',
  async (aspect, { rejectWithValue }) => {
    try {
      const { data } = await getSummary(aspect);

      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
