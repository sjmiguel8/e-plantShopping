import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
var store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
export default store;