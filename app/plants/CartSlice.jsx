// import { createSlice } from '@reduxjs/toolkit'

// const plantsSlice = createSlice({
//   name: 'plantsNum',
//   initialState: {count: typeof window !== "undefined"? 
//     JSON.parse(localStorage.getItem("plantsCount")).counter.count
//     : 0},
//   reducers: {
//     increment :(state) =>{
//         state.count += 1    
//     },
//     decrement :(state) =>{
//         state.count -= 1    
//     }
//   },
// })


// export const { increment, decrement } = plantsSlice.actions
// export default plantsSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;