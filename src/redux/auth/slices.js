import { createSlice } from "@reduxjs/toolkit";
import { logoutThunk } from "./thunks";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: { name: null, email: null },
        token: null,
        isAuth: false,
    },
     extraReducers: {

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
