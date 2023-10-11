import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";

import axios from "axios";
export const getUserInfo = createAsyncThunk("login", async (data) => {
    try {
        const result = await axios.post("https://dummyjson.com/auth/login",data);
        return result.data;
    }
    catch (ex) {
        throw ex;
    }
})
export const login = createAsyncThunk("login", async (data) => {
    try {
        const result = await axios.post("https://dummyjson.com/auth/login",data);
        return result.data;
    }
    catch (ex) {
        throw ex;
    }
})
const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        hasError: false,
        loginInfo: {},
        loginStatus: false
    },
    reducers: {
        logout: (state, action) => {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                loginInfo: {},
                loginStatus: false
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state,action) => {
            state.isLoading = true
            state.hasError= false
            state.loginInfo={}
            state.loginStatus= false
        })
        builder.addCase(login.fulfilled,(state,action) => {
            state.isLoading = false
            state.hasError= false
            state.loginInfo=action.payload
            state.loginStatus= true
        })
        builder.addCase(login.rejected,(state,action) => {
            state.isLoading = false
            state.hasError= true
            state.loginInfo={}
            state.loginStatus= false
        })
    }
});
export const {logout} = AuthSlice.actions;
export default AuthSlice.reducer