import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, refreshUser, logOut } from './operations'
const initialState = {
    user: {name: null,email: null,password:null},
    token:null,
    isLoggedIn: false,
    isRefreshing: false,
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:{
        [register.fulfilled](state, action){
            console.log(action);
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state,action){
            state.user= action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
          },
          [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
          },
          [refreshUser.rejected](state) {
            state.isRefreshing = false;
          },
          [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
          },
    }
})
export const authReducer = authSlice.reducer;