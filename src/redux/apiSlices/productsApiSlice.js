import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products'],
        }),
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/products',
                method: 'POST',
                body: newProduct,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Products'],
        }),
    }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApiSlice;
