import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  count: 1,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it  quantity of 1
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id //(action.payload.id) removeFromCart action is dispatched with a payload containing { id: item.id}
      );
    },
    clearCart: (state) => {
      state.cartItems = []; // Clear the cart
    },
    increment: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        // Optional: remove item from cart if quantity is 1
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      }
    },

    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const selectCartItemCount = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  clearCart,
  increment,
  decrement,
  incrementByAmount,
} = CartSlice.actions;

export default CartSlice.reducer;
