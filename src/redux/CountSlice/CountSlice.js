import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    setCountProduct: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCountProduct } = countSlice.actions;
export default countSlice.reducer;
