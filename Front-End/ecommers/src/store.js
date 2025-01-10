import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './features/updateCartSlice/updateCartSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
})