import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logoutThunk, fetchCurrentUser } from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: null,
    token: null,
    isAuth: false,
    isFetchingCurrentUser: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.email;
      state.token = action.payload.token;
      state.isAuth = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.email;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [logoutThunk.fulfilled](state, _) {
      return {
        ...state,
        user: { name: null, email: null },
        token: null,
        isAuth: false,
      };
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.email;
      state.isAuth = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
