import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logoutThunk, fetchCurrentUser } from "./thunks";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        email: null,
        token: null,
        isFetchingCurrentUser: false,
        formError: null,
        verify: false,
    },
    extraReducers: {
         [register.fulfilled](state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.verify = action.payload.verificationEmailSend;
            state.formError = action.payload;
        },
         [logIn.fulfilled](state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
             state.formError = action.payload;
        },
         [logoutThunk.fulfilled](state,_){
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,
            }
        },
         [fetchCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
         [fetchCurrentUser.fulfilled](state, action) {
            state.email = action.payload.email;
            state.isAuth = true;
            state.isFetchingCurrentUser = false;
        },
         [fetchCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
        }
    }
})

export default authSlice.reducer;
