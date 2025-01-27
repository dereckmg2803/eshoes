import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Payload recibido:", action.payload);
      console.log("Estado actual del carrito:", state.products);
    
      const item = state.products.find(
        (item) => item._id === action.payload._id && item.size === action.payload.size
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    
      console.log("Estado actualizado del carrito:", state.products);
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
} = orebiSlice.actions;

export default orebiSlice.reducer;
