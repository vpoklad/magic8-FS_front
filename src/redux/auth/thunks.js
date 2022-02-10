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

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('api/users/registration', credentials);
    token.set(data.token);
    data.data.verifyMessage =
      'Лист підветдження відравлено на вказану електронну адресу.';
    return data.data;
  } catch (error) {
    let formError = {};
    if (error.message.includes('409')) {
      formError.message =
        'Така електронна адреса вже була використана для створення облікового запису користувача.';
    } else if (error.message.includes('400')) {
      formError.message =
        'Будь ласка, введіть правильну адресу електронної пошти та пароль.';
    } else if (error.message.includes('500')) {
      formError.message = 'Помилка сервера. Спробуйте пізніше...';
    }
    return formError;
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('api/users/login', credentials);
    token.set(data.token);
    return data.data;
  } catch (error) {
    let formMessage = {};
    if (error.message)
      formMessage.message =
        'Будь ласка, введіть правильну адресу електронної пошти та пароль. Або зареєструйся.';
    return formMessage;
  }
});

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    if (!state.auth.token) return;
    token.set(state.auth.token);
    try {
      const { data } = await axios.post('api/users/logout');
      return data.data;
    } catch (err) {
      // thunkAPI.rejectWithValue({ error: err.message });
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

export const googleAuth = createAsyncThunk('auth/login', a => {
  console.log('googleAuth', a);
  return a;
  // return {
  //   type: 'auth/google',
  //   payload: a,
  // };
});
