import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./AddtoCart/CartSlice";
export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
