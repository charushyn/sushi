import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './features/basket-slice.js'

export const store = configureStore({
    reducer: {
        basketReducer,
    },
})