import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CHEAP, EXPENSIVE, POPULAR } from '../../constants';
import { filterByPrice } from '../../functions/filterByPrice';

export const loadAllProducts = createAsyncThunk(
    '@@products/loadAllProducts',
    /*async*/ (_, { extra: { client, api } }) => {
        return client.get(api.ALL_PRODUCTS);
    }
);

export const loadProductsByCategory = createAsyncThunk(
    '@@products/loadProductsByCategory',
    /*async*/ (category, { extra: { client, api } }) => {
        return client.get(api.getProductsByCategory(category));
    }
);

export const loadProductsByKeyword = createAsyncThunk(
    '@@products/loadProductsByKeyword',
    /*async*/ (keyword, { extra: { client, api } }) => {
        return client.get(api.searchProductsByKeyword(keyword));
    }
);

const initialState = {
    status: 'idle',
    error: null,
    products: [],
};

const productsSlice = createSlice({
    name: '@@products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadAllProducts.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadAllProducts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadAllProducts.fulfilled, (state, action) => {
                state.status = 'received';
                state.products = action.payload.data.products;
            })
            .addCase(loadProductsByCategory.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadProductsByCategory.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadProductsByCategory.fulfilled, (state, action) => {
                state.status = 'received';
                state.products = action.payload.data.products;
            })
            .addCase(loadProductsByKeyword.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadProductsByKeyword.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadProductsByKeyword.fulfilled, (state, action) => {
                state.status = 'received';
                state.products = action.payload.data.products;
            });
    },
});

//reducers
export const productReducer = productsSlice.reducer;

//selectors
export const selectProductsInfo = (state) => ({
    status: state.products.status,
    error: state.products.error,
});
export const selectProducts = (state) => state.products.products;
export const selectFilteredProducts = (state, currentSort, price) => {
    if (currentSort === CHEAP) {
        return filterByPrice(state.products.products, price)
            .slice()
            .sort((a, b) => a.price - b.price);
    }

    if (currentSort === EXPENSIVE) {
        return filterByPrice(state.products.products, price)
            .slice()
            .sort((a, b) => b.price - a.price);
    }

    if (currentSort === POPULAR) {
        return filterByPrice(state.products.products, price)
            .slice()
            .sort((a, b) => b.rating - a.rating);
    }

    return state;
};
