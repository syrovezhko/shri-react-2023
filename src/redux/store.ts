import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./fetures/cart";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});