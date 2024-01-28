import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalBill: 0 },
  reducers: {
    addItem: (state: any, action: any) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the product already exists, increase the quantity
        existingItem.quantity += 1;
        // Update totalBill
        state.totalBill = calculateTotalBill(state.items);
      } else {
        // If it's a new product, add it to the cart with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
        // Update totalBill
        state.totalBill = calculateTotalBill(state.items);
      }
    },
    increaseQuantity: (state, action: any) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        // Increase the quantity, making sure it doesn't go over the available quantity
        item.quantity = Math.min(
          item.quantity + 1,
          item.availableQuantity || Infinity
        );
      }
    },
    decreaseQuantity: (state, action: any) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      // If quantity becomes 0, remove the item from the cart
      if (item.quantity === 0) {
        state.items.splice(item, 1);
      }
      // Update totalBill
      state.totalBill = calculateTotalBill(state.items);
    },
  },
});
const calculateTotalBill = (items: any) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};
export const { addItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
