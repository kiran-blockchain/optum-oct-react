import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    try {
        const result = await axios.get('https://dummyjson.com/products');
        return result.data;
    }
    catch (ex) {
        return { message: "Error in fetching the data" }
    }
})
const ProductSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        hasError: false,
        products: [],
        "total": 0,
        "skip": 0,
        "limit": 0,
        cartItems: [],
        total: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let cartItems = [...state.cartItems];
            cartItems.push(action.payload);
            let total = cartItems.reduce((x, y) => {
                return x.price + y.price
            });
            return { ...state, cartItems, total: total }
        },
        resetCart: (state, action) => {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                products: [],
                "total": 0,
                "skip": 0,
                "limit": 0,
                cartItems: [],
                total: 0
            }
        }
    },
    extraReducers: (builder) => {
        //if the call is in progress
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        //success
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.hasError = false;
            state.products = action.payload.products;
            state.limit = action.payload.limit;
            state.skip = action.payload.skip;
            state.total = action.payload.total;
        })
        //failed 
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })

    }
});

export const { addToCart,resetCart } = ProductSlice.actions;

export default ProductSlice.reducer;
