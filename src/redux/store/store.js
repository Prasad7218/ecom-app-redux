import { configureStore } from '@reduxjs/toolkit';
import { productsApiSlice } from '../apiSlices/productsApiSlice';
import productsReducer from "../slices/productSlice";

// console.log("productsReducer:", productsReducer);

export const store = configureStore({
    reducer: {
        products: productsReducer,
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApiSlice.middleware),
});
