import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./exampleSlice";

const store = configureStore({
    reducer: { 
        exampleSlice:exampleSlice
     },
});

export default store;