import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        userDetail: {
            name: 'unknown',
            email: '',
            mobile: '',
            password: ''
        }
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true; 
            state.userDetail.name = action.payload.name;
            state.userDetail.email = action.payload.email;
            state.userDetail.mobile = action.payload.mobile;
            state.userDetail.password = action.payload.password;
        },
        logout: (state) => {
            state.isLogin = false; 
            state.userDetail.name = 'unknown';
            state.userDetail.email = '';
            state.userDetail.mobile = '';
            state.userDetail.password = '';
        },
    },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
