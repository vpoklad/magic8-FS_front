import { createSlice } from '@reduxjs/toolkit';

import { register, logIn, logout, fetchCurrentUser } from './thunks';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
    // isFetchingCurrentUser: false,
    formNotification: null,
    verify: null,
    errorCode: null,
    isLoading: false,
  },
  reducer: {
    google(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.avatarURL = action.payload.avatarURL;
    },
  },

  extraReducers: {
    [register.pending](state, action) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.verify = action.payload;
      state.formNotification = action.payload;
      state.errorCode = null;
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.errorCode = action.payload;
      state.isLoading = false;
    },

    [logIn.pending](state, action) {
      state.isLoading = true;
    },

    [logIn.fulfilled](state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoading = false;
      state.errorCode = null;
    },
    [logIn.rejected](state, action) {
      state.errorCode = action.payload;
      state.isLoading = false;
    },

    [logout.pending](state, action) {
      state.isLoading = true;
    },

    [logout.fulfilled](state, action) {
      state.email = null;
      state.token = null;
      state.isLoading = false;
      state.errorCode = null;
    },
    [logout.rejected](state, action) {
      state.isLoading = false;
      state.errorCode = action.payload;
    },

    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.email = action.payload.email;
      state.isLoading = false;
      state.errorCode = null;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isLoading = false;
      state.errorCode = action.payload;
    },
  },
});

export default authSlice.reducer;
export const google = authSlice.action;
