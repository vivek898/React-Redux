import { createSlice } from "@reduxjs/toolkit";


const intialAuthState: any = { isAuth: false };

const authSlice: any = createSlice({
    name: 'authentication',
    initialState: intialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    }
});

export const authActions: any = authSlice.actions;

export default authSlice.reducer;