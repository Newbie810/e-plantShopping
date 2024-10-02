import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, cost } = action.payload; // Make sure these properties are passed
      const existingItem = state.items.find(item => item.id === id); // Check by id
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, image, cost, quantity: 1 }); // Add id to the new item
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload; // Expect id here
      state.items = state.items.filter(item => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload; // Use id for identifying the item
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        if (quantity > 0) {
          itemToUpdate.quantity = quantity;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
