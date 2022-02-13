import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBalance, getBalance } from '../../services';

export const getBalanceThunk = createAsyncThunk(
  'balance/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBalance();
      console.log(data.data.balance);
      return data.data.balance;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const addBalanceThunk = createAsyncThunk(
  'balance/add',
  async (balance, { rejectWithValue }) => {
    try {
      const { data } = await addBalance(balance);

      return data.data.userBalance;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
