import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {

      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {

      state.products = state.products.filter(product => product.id !== action.payload);
    },
    clearCart: (state) => {

      state.products = [];
    },
  },
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;


export default cartSlice.reducer;
