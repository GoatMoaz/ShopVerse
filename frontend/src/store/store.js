import { createSlice, configureStore } from "@reduxjs/toolkit";

const savedCartItems = localStorage.getItem("cart");

let preloadedState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

if (savedCartItems) {
  preloadedState = JSON.parse(savedCartItems);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: preloadedState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (!existingItem) {
        state.items.push({
          _id: newItem._id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.images[0],
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeOneItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item._id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      state.totalPrice -= existingItem.price;
      state.totalQuantity--;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item._id === id);

      state.totalPrice -= existingItem.totalPrice;
      state.totalQuantity -= existingItem.quantity;

      state.items = state.items.filter((item) => item._id !== id);
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState()));
});

export const cartActions = cartSlice.actions;

export default store;
