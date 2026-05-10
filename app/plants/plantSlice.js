import { createSlice } from '@reduxjs/toolkit'

const plantsSlice = createSlice({
  name: 'plantsNum',
  initialState: {count: typeof window !== "undefined"? 
    JSON.parse(localStorage.getItem("plantsCount")).counter.count
    : 0},
  reducers: {
    increment :(state) =>{
        state.count += 1    
    },
    decrement :(state) =>{
        state.count -= 1    
    }
  },
})


export const { increment, decrement } = plantsSlice.actions
export default plantsSlice.reducer