import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logoutThunk } from "./thunks";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: { name: null, email: null },
        token: null,
        isAuth: false,
    },
    extraReducers: {
         [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
         [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
         [logoutThunk.fulfilled](state,_){
            return {
                ...state,
                user: { name: null, email: null },
                token: null,
                isAuth: false,
            }
        }
    }
})

export default authSlice.reducer;
