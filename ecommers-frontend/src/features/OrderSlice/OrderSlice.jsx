import { createSlice } from '@reduxjs/toolkit';

const OrderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [], 
  },
  reducers: {
    addOrder: (state, action) => {
     
      const newOrders = action.payload;
      if (Array.isArray(newOrders)) {
        state.orders.push(...newOrders); 
      } else {
        state.orders.push(newOrders); 
      }
      const plainObject = JSON.parse(JSON.stringify(newOrders));

      console.log('Updated Orders:', plainObject);
    },

   

   
  },
});

export const { addOrder, removeOrder, updateOrder } = OrderSlice.actions;

export default OrderSlice.reducer;
