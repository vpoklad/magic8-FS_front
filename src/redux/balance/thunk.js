import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBalance } from '../../services';

export const addBalanceThunk = createAsyncThunk(
  'balance/add',
  async (balance, { rejectWithValue }) => {
    try {
      const { data } = await addBalance(balance);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
