import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransaction,
  getTransactions,
  delTransaction,
} from '../../services/index';

export const addNewTransactionThunk = createAsyncThunk(
  'transactions/addNewTransactionThunk',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await addTransaction(transaction);

      return data.data.transactions;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const getTransactionsThunk = createAsyncThunk(
  'transactions/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTransactions();
      console.log(data.data)
      return data.data
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const delTransactionThunk = createAsyncThunk(
  'transaction/del',
  async (id, { rejectWithValue }) => {
    try {
      await delTransaction(id);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

