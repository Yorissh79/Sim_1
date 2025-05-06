import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./reducers/CardSlice"
import basketSlice from "./reducers/basketSlice"

export const store = configureStore({
    reducer: {
        card: cardSlice,
        basket: basketSlice
    }
})