import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    userDetail: {
      userID: '',
      name: 'unknown',
      email: '',
      mobile: '',
      role: '',
    },
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true; 
      state.userDetail.userID = action.payload.userID;
      state.userDetail.name = action.payload.userName; 
      state.userDetail.email = action.payload.email;
      state.userDetail.mobile = action.payload.mobile;
      state.userDetail.role = action.payload.role; 
    },
    logout: (state) => {
      state.isLogin = false; 
      state.userDetail = {
        userID: '',
        name: 'unknown',
        email: '',
        mobile: '',
        role: '',
      };
    },
  },

  
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
