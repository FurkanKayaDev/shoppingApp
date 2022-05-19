import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import axios from 'axios';
import {Alert} from 'react-native';
const api = 'https://fakestoreapi.com/products';

export const fetchDetails = createAsyncThunk('details/getDetails', async id => {
  const res = await axios(`${api}/${id}`);
  return res.data;
});

export const detailSlice = createSlice({
  name: 'details',
  initialState: {
    items: [],
    status: 'idle',
    favourites: [],
    cart: [],
  },
  reducers: {
    ADD_FAVOURITES: (state, action) => {
      if (state.favourites.find(item => item.id === action.payload.id)) {
        showMessage({
          message: 'Shopping App',
          description: 'Successfully completed',
          type: 'danger',
        });
        return state;
      } else {
        showMessage({
          message: 'Shopping App',
          description: 'Successfully added',
          type: 'success',
        });
        state.favourites = [...state.favourites, action.payload];
      }
    },
    ADD_CART: (state, action) => {
      if (state.cart.find(item => item.id === action.payload.id)) {
        showMessage({
          message: 'You have already add this product',
          description: 'Successfully completed',
          type: 'danger',
        });
        return state;
      } else {
        showMessage({
          message: 'Shopping App',
          description: 'Successfully added',
          type: 'success',
        });
        state.cart = [...state.cart, action.payload];
      }
    },
    REMOVE_FAV: (state, action) => {
      state.favourites = [
        ...state.favourites.filter(favori => favori.id !== action.payload),
      ];
      showMessage({
        message: 'Shopping App',
        description: 'Successfully removed from favorites',
        type: 'success',
      });
    },
    REMOVE_CART: (state, action) => {
      state.cart = [
        ...state.cart.filter(favori => favori.id !== action.payload),
      ];
      showMessage({
        message: 'Shopping App',
        description: 'Successfully removed from Cart',
        type: 'success',
      });
    },

    REMOVE_CART_ALL: (state, action) => {
      state.cart = [];
      showMessage({
        message: 'Shopping App',
        description: 'Successfully completed',
        type: 'success',
        position: 'right',
      });
    },
  },
  extraReducers: {
    [fetchDetails.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDetails.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchDetails.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {
  ADD_FAVOURITES,
  ADD_CART,
  REMOVE_FAV,
  REMOVE_CART,
  REMOVE_CART_ALL,
} = detailSlice.actions;
export default detailSlice.reducer;
