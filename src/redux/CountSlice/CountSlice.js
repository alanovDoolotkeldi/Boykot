import { createSlice } from "@reduxjs/toolkit";
const countProduct = createSlice({
    name:"count",
    initialState:{count:0},
    reducers:{
        setCountProduct:(state,action)=> {
            console.log(action.payload)
        }
    }
})
export const {setCountProduct}=countProduct.actions;
export default countProduct.reducer
