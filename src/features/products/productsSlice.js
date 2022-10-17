import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const loadAllProducts = createAsyncThunk(
    '@@products/loadAllProducts',
    /*async*/ (_, { extra: { client, api } }) => {
        return client.get(api.ALL_PRODUCTS);
    }
);

export const loadProductsByCategory = createAsyncThunk(
    '@@products/load-products-by-category',
    /*async*/ (category, { extra: { client, api } }) => {
        return client.get(api.getProductsByCategory(category));
    }
);

const initialState = {
    status: 'idle',
    error: null,
    listOfAllProducts: [],
    listOfProductsBySelectedCategory: [],
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
                state.listOfAllProducts = action.payload.data.products;
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
                state.listOfProductsBySelectedCategory =
                    action.payload.data.products;
            });
    },
});

//reducers
export const productReducer = productsSlice.reducer;

//selectors
export const selectProductsInfo = (state) => ({
    status: state.products.status,
    error: state.products.error,
    quantityOfAllProducts: state.products.listOfAllProducts.length,
});

export const selectAllProducts = (state) => state.products.listOfAllProducts;
export const selectProductsByCategory = (state) =>
    state.products.listOfProductsBySelectedCategory;
