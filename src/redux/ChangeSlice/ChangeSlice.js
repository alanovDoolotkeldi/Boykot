import { createSlice } from "@reduxjs/toolkit";
const ChangeProduct = createSlice({
    name:"change-product",
    initialState:{value:""},
    reducers:{
      setChangeProduct:(state,action)=> {
       state.value = action.payload
      }
    }
})
export const {setChangeProduct} = ChangeProduct.actions;
export default ChangeProduct.reducer