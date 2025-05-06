import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./reducers/CardSlice"

export const store = configureStore({
    reducer: {
        card: cardSlice
    }
})