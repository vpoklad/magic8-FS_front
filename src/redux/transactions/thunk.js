import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactions,
  delTransaction,
} from '../../services/index';

export const addNewTransactionThunk = createAsyncThunk(
  'transactions/addNewTransactionThunk',
  async (transaction, { rejectWithValue }) => {
    console.log(1);
    try {
      console.log(2);
      const { data } = await addTransaction(transaction);

      console.log('до ерр', data);
      return data.data;
    } catch (error) {
      console.log(3);
      console.log(rejectWithValue(error));
      return rejectWithValue(error);
    }
  },
);

export const getTransactionsThunk = createAsyncThunk(
  'transactions/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTransactions();
      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const delTransactionThunk = createAsyncThunk(
  'transaction/del',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await delTransaction(id);
      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
