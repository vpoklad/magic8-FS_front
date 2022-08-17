import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSummary } from '../../services';

export const summaryThunk = createAsyncThunk(
  'summary/get',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await getSummary(obj);

      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
