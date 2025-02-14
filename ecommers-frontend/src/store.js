import { configureStore } from '@reduxjs/toolkit';

import CartSlice from './features/cartSlice/CartSlice';
import UserSlice from './features/userSlice/UserSlice';
import OrderSlice from './features/OrderSlice/OrderSlice'; 

export default configureStore({
  reducer: {
    cart: CartSlice,
    user: UserSlice,
    orders: OrderSlice, 
  },
});
