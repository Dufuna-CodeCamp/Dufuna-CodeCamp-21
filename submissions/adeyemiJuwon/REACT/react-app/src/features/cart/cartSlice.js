import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalAmount: 0,
  deliveryFee: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      } else {
        const tempItem = { ...action.payload, qty: 1 };
        state.cartItems.push(tempItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    increaseCartQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].qty >= 0) {
        state.cartItems[itemIndex].qty += 1;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseCartQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].qty >= 1) {
        state.cartItems[itemIndex].qty -= 1;
      } else if (state.cartItems[itemIndex].qty < 0) {
        state.cartItems[itemIndex].qty = 0;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotal: (state, action) => {
      let total = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, qty } = cartItem;
        const itemTotal = price * qty;
        cartTotal += itemTotal;
        return cartTotal;
      }, 0);
      state.cartTotalAmount = total;
      state.deliveryFee = total * 0.01;
    },
  },
});

export const { addToCart, increaseCartQty, decreaseCartQty, getTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
