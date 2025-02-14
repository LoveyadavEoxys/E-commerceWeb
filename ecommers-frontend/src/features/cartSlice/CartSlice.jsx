import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.totalAmount -= action.payload.price;
    },
    clearCart: (state) => {
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
