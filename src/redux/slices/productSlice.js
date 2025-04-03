import { createSlice } from "@reduxjs/toolkit";
import { productsApiSlice } from "../apiSlices/productsApiSlice";

const initialState = {
    products: [],
    searchQuery: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            productsApiSlice.endpoints.getProducts.matchFulfilled,
            (state, { payload }) => {
                // console.log("payload: " + JSON.stringify(payload));
                state.products = payload;
            }
        );
    },
});

export const { setSearchQuery, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
