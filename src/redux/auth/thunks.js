import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_USER_URL = `https://kapusta-magic8.herokuapp.com/`;
const userLogout = 'api/users/logout';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = BASE_USER_URL;

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('api/users/registration', credentials);
    token.set(data.token);
    return data.data;
  } catch (error) {
    // throw new Error(toast('An error create user. Try again!'));
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('api/users/login', credentials);
    token.set(data.token);
    return data.data;
  } catch (error) {
    // throw new Error(toast('Invalid email or password! Try again!'));
  }
});

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

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/users/current');
      return data.data;
    } catch (error) {}
  },
);
