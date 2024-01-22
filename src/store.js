import { configureStore } from "@reduxjs/toolkit";
import housesReducer from "./featrures/housesSlice";

export const store = configureStore({
  reducer: {
    houses: housesReducer,
  },
});
