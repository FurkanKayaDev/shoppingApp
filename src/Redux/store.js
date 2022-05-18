import {configureStore} from '@reduxjs/toolkit';
import detailSlice from './detailSlice/detailSlice';
import productSlice from './productSlice/productSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    details: detailSlice,
  },
});
