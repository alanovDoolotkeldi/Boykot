import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Product/ProductSlice";
import ChangeSlice from "./ChangeSlice/ChangeSlice";
import CountSlice from "./CountSlice/CountSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    value:ChangeSlice,
    count:CountSlice
  },
});

export default store;
