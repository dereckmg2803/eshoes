import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Array de productos en el carrito
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    // Añadir producto al carrito
    addToCart: (state, action) => {
      const { _id, size, quantity } = action.payload;

      // Buscar si el producto ya está en el carrito con la misma talla
      const existingProduct = state.products.find(
        (item) => item._id === _id && item.size === size
      );

      if (existingProduct) {
        // Si ya existe, incrementar la cantidad
        existingProduct.quantity += quantity || 1;
      } else {
        // Si no existe, añadir el producto al carrito
        state.products.push({ ...action.payload, quantity: quantity || 1 });
      }
    },

    // Incrementar cantidad de un producto
    increaseQuantity: (state, action) => {
      const { _id, size } = action.payload;
      const item = state.products.find(
        (item) => item._id === _id && item.size === size
      );
      if (item) {
        item.quantity++;
      }
    },

    // Decrementar cantidad de un producto
    decreaseQuantity: (state, action) => {
      const { _id, size } = action.payload;
      const item = state.products.find(
        (item) => item._id === _id && item.size === size
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          // Si la cantidad es 1, eliminar el producto del carrito
          state.products = state.products.filter(
            (product) => !(product._id === _id && product.size === size)
          );
        }
      }
    },

    // Eliminar un producto del carrito
    deleteItem: (state, action) => {
      const { _id, size } = action.payload;
      state.products = state.products.filter(
        (item) => !(item._id === _id && item.size === size)
      );
    },

    // Vaciar el carrito
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} = orebiSlice.actions;

export default orebiSlice.reducer;