import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './features/cartSlice/CartSlice';
import UserSlice from './features/userSlice/UserSlice';
import OrderSlice from './features/OrderSlice/OrderSlice'; 

export default configureStore({
  reducer: {
    cart: cartSlice,
    user: UserSlice,
    orders: OrderSlice, 
  },
});
