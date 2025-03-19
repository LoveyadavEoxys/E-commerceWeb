import { createSlice } from "@reduxjs/toolkit";

// Retrieve user data from sessionStorage (if available)
const storedUser = sessionStorage.getItem("userDetail");
const storedLoginState = sessionStorage.getItem("isLogin");

const initialState = {
  isLogin: storedLoginState === "true", // Convert string to boolean
  userDetail: storedUser ? JSON.parse(storedUser) : { 
    userId: '',
    name: 'unknown',
    email: '',
    mobile: '',
    role: '',
  },
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userDetail = { ...action.payload }; 
      
      // Store in sessionStorage
      sessionStorage.setItem("userDetail", JSON.stringify(state.userDetail));
      sessionStorage.setItem("isLogin", "true");
    },
    logout: (state) => {
      state.isLogin = false;
      state.userDetail = {
        userId: '',
        name: 'unknown',
        email: '',
        mobile: '',
        role: '',
      };

      // Clear sessionStorage
      sessionStorage.removeItem("userDetail");
      sessionStorage.removeItem("isLogin");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
