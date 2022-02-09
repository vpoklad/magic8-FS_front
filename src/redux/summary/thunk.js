import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSummary } from '../../services';

export const addBalanceThunk = createAsyncThunk(
  'summary/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getSummary();

      return data.data.userBalance;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
