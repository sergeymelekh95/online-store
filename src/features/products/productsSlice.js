import { createAsyncThunk } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

export const loadProducts = createAsyncThunk(
    '@@products/load-products',
    /*async*/ (_, { extra: { client, api } }) => {
        return client.get(api.ALL_PRODUCTS);
    }
);

const initialState = {
    status: 'idle',
    error: null,
    list: [],
}

const productsSlice = createSlice({
    name: '@@products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadProducts.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadProducts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.status = 'received';
                state.list = action.payload.data.products;
            });
    }
})

export const productReducer = productsSlice.reducer;

//selectors
export const selectProductsInfo = (state) => ({
    status: state.products.status,
    error: state.products.error,
    qty: state.products.list.length,
});

export const selectAllProducts = (state) => state.products.list;
// export const selectVisibleProducts = (state, { search = '', region = '' }) => {
//     return state.countries.list.filter(
//         (country) =>
//             country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
//             country.region.includes(region)
//     );
// };
