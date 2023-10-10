import { createSlice } from "@reduxjs/toolkit";

const counterSliceReducer = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(action.type);
            console.log(action.payload);
            return { ...state, count: action.payload }
        },
        decrement: (state, action) => {
            console.log(action.payload);
            return { ...state, count: state.count - 1 }
        },
        reset: (state, action) => {
            console.log(action.payload);
            return { ...state, count: 0 }
        },
    }
});

//export the increment action 
export const { increment, decrement,reset } = counterSliceReducer.actions;

//export the reducer
export default counterSliceReducer.reducer;