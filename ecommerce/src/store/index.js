import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productReducer";

export default configureStore({
   reducer:{
    products:ProductSlice
   } 
});