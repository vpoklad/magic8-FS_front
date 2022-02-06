import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_USER_URL = `https://kapusta-magic8.herokuapp.com/`;
const userLogout = '/logout';

axios.defaults.baseURL = BASE_USER_URL;

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    if (!state.auth.token) return;
    try {
      await fetch(BASE_USER_URL + userLogout, {
        method: 'POST',
        headers: {
          Authorization: state.auth.token,
        },
      });
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);
