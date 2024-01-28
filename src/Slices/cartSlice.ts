import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { wishListItem: [], items: [], totalBill: 0 },
  reducers: {
    wishListAddItem: (state: any, action: any) => {
      const existingItem = state.wishListItem.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        // If the product already exists, increase the quantity
        state.wishListItem = state.wishListItem.filter(
          (item) => item.id !== action.payload
        );
      } else {
        // If it's a new product, add it to the cart with quantity 1
        state.wishListItem.push({ ...action.payload, quantity: 1 });
      }
    },
    addItem: (state: any, action: any) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the product already exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new product, add it to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
        // Update totalBill
        state.totalBill = calculateTotalBill(state.items);
      }
    },
    increaseQuantity: (state, action: any) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        // Increase the quantity, making sure it doesn't go over the available quantity
        item.quantity = Math.min(
          item.quantity + 1,
          item.availableQuantity || Infinity
        );
        // Update totalBill
        state.totalBill = calculateTotalBill(state.items);
      }
    },
    decreaseQuantity: (state, action: any) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        // Decrease the quantity, ensuring it doesn't go below 1
        item.quantity = item.quantity - 1;
        // Update totalBill
        state.totalBill = calculateTotalBill(state.items);
      }
      // If quantity becomes 0, remove the item from the cart
      if (item.quantity === 0) {
        const index = state.items.findIndex(
          (cartItem) => cartItem.id === action.payload
        );
        if (index !== -1) {
          const index = state.items.findIndex(
            (cartItem) => cartItem.id === action.payload
          );
          if (index !== -1) {
            state.items.splice(index, 1);
          }
        }
      }
      // Update totalBill
      state.totalBill = calculateTotalBill(state.items);
    },
  },
});
const calculateTotalBill = (items: any) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};
export const { wishListAddItem, addItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
