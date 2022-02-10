import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logoutThunk,
  fetchCurrentUser,
  googleAuth,
} from './thunks';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
    isFetchingCurrentUser: false,
    formError: null,
    verify: false,
    verifyMessage: null,
  },

  extraReducers: {
    [register.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.verify = action.payload.verificationEmailSend;
      state.verifyMessage = action.payload.verifyMessage;
      state.formError = action.payload;
    },
    [logIn.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.verify = action.payload.verificationEmailSend;
      state.verifyMessage = null;
      state.formError = action.payload;
    },
    [logoutThunk.fulfilled](state, action) {
      state.email = null;
      state.token = null;
      state.formError = null;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.email = action.payload.email;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
    [googleAuth.fulfilled](state, action) {
      state.email = action.payload.email;
      state.verificationToken = action.payload.verificationToken;
      state.avatarURL = action.payload.avatarURL;
    },
  },
});

export default authSlice.reducer;
