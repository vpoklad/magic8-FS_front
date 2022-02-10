import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addBalance } from '../../services';

export const getReportThunk = createAsyncThunk(
  'getReport/request',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('api/stats/detalied', params);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
