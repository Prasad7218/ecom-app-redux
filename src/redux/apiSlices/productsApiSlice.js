import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/posts',
        }),
    }),
});

export const { useGetProductsQuery } = productsApiSlice;
