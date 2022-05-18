import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const api = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk(
  'products/geProducts',
  async () => {
    const response = await axios.get(api);
    return response.data;
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default productsSlice.reducer;
