import { configureStore } from '@reduxjs/toolkit'
import adToCartSlice from './slices/adToCartSlice'

export const store = configureStore({
  reducer: {
    adtocart: adToCartSlice,
  },
})