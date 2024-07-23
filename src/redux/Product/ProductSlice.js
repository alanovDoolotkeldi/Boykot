import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { data: [] },
  reducers: {
    setProduct: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
