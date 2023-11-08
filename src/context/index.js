import { configureStore } from "@reduxjs/toolkit";
import documentSlice from "./documentSlice";
export const store = configureStore({
    reducer:{
        document: documentSlice.reducer
    }
})