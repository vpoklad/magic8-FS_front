import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  addTransaction,
  getAllTransactions,
  delTransaction,
} from '../../services/index';

const BASE_USER_URL = 'https://kapusta-magic8.herokuapp.com/';

axios.defaults.baseURL = BASE_USER_URL;

// const addNewTransactionThunk = createAsyncThunk(
//   'transactions/addNewTransactionThunk',
//   async ({ productName, category, payValue }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/api/transactions', {
//         productName,
//         category,
//         payValue,
//       });
//       console.log('data from thunk:', data);
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   },
// );

const addNewTransactionThunk = createAsyncThunk(
  'transaction/addNewTransactionThunk',
  async (transaction, { rejectWithValue }) => {
    try {
      console.log('transaction in thunk before fetch:', transaction);
      const { data } = await addTransaction(transaction);

      console.log(data);

      return data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const getAllTransactionsThunk = createAsyncThunk(
  'transactions/get',
  async (transactions, { rejectWithValue }) => {
    try {
      const { data } = await getAllTransactions(transactions);
      console.log(data.data);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const delTransactionThunk = createAsyncThunk(
  'transaction/del',
  async (id, { rejectWithValue }) => {
    try {
      await delTransaction(id);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const thunks = {
  addNewTransactionThunk,
  getAllTransactionsThunk,
  delTransactionThunk,
};

export default thunks;
