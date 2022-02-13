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

// export const register = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('api/users/registration', credentials);
//     token.set(data.token);
//     data.data.verifyMessage =
//       'Лист підветдження відравлено на вказану електронну адресу.';
//     return data.data;
//   } catch (error) {
//     let formError = {};
//     if (error.message.includes('409')) {
//       formError.message =
//         'Така електронна адреса вже була використана для створення облікового запису користувача.';
//     } else if (error.message.includes('400')) {
//       formError.message =
//         'Будь ласка, введіть правильну адресу електронної пошти та пароль.';
//     } else if (error.message.includes('500')) {
//       formError.message = 'Помилка сервера. Спробуйте пізніше...';
//     }
//     return formError;
//   }
// });

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('api/users/login', credentials);
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      rejectWithValue(error.code);
    }
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

    if (persistedToken === null) return;

    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/users/current');
      return data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.code);
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
