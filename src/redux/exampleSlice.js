import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
    name: "exampleSlice",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state,action) => {
            state.value += action.payload;
        }
    },
});

export const { increment } = exampleSlice.actions;

export default exampleSlice.reducer;