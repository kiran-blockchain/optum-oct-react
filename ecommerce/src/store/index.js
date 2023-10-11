import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productReducer";
import AuthSlice from "./AuthReducer";

export default configureStore({
    reducer: {
        products: ProductSlice,
        auth: AuthSlice
    }
});