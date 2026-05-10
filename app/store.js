import { configureStore } from '@reduxjs/toolkit'
import plantseRducer from './plants/plantSlice'

export const store = configureStore({
  reducer: {
    counter: plantseRducer,
  },
})


store.subscribe(() => {
if (typeof window == "undefined") return;

localStorage.setItem("plantsCount", JSON.stringify(store.getState()));
  
});