import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart:[]
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const selectTotalsOfCart = createSelector(getCart, (cart) =>
  cart.reduce(
    (acc, curr) => {
      return {
        totalQuantity: curr.quantity + acc.totalQuantity,
        totalPrice: curr.unitPrice * curr.quantity + acc.totalPrice,
      };
    },
    { totalQuantity: 0, totalPrice: 0 },
  ),
);

export const getCurrentQuantityById = (pizzaId) =>
  createSelector(
    getCart,
    (cart) => cart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0,
  );
