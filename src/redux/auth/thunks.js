import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('api/users/registration', credentials);

      return data.data.verificationEmailSend;
    } catch (error) {
      rejectWithValue(error.code);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('api/users/login', credentials);
      token.set(data.data.token);

      return data.data;
    } catch (err) {}
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  if (!state.auth.token) return;
  try {
    await axios.post('api/users/logout');
    token.unset();
  } catch (err) {
    thunkAPI.rejectWithValue(err.code);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/users/current');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const googleAuth = createAsyncThunk(
  'auth/logInWithGoogle',
  async credentials => {
    token.set(credentials.token);

    return {
      ...credentials,
    };
  },
);
