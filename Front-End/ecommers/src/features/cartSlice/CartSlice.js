import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        const removedProduct = state.products[index];
        state.products.splice(index, 1);
        state.totalAmount -= removedProduct.price;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalAmount = 0;  
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
