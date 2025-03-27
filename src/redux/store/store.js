import { configureStore } from '@reduxjs/toolkit';
import { productsApiSlice } from '../apiSlices/productsApiSlice';

export const store = configureStore({
    reducer: {
        [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApiSlice.middleware),
});
