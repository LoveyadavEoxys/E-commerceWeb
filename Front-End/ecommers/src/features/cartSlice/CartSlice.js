import { createSlice } from '@reduxjs/toolkit'

 const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {

      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {

      const index = state.products.findIndex(product => product.id === action.payload);
    if (index !== -1) {
        state.products.splice(index, 1); 
    }
    },
    clearCart: (state) => {

      state.products = [];
    },
  },
});


export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;


export default CartSlice.reducer;
