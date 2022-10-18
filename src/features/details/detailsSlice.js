import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadProductById = createAsyncThunk(
    '@@details/loadProductById',
    /*async*/ (id, { extra: { client, api } }) => {
        return client.get(api.getProductById(id));
    }
);

const initialState = {
    status: 'idle',
    error: null,
    product: null,
};

const detailsSlice = createSlice({
    name: '@@details',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadProductById.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadProductById.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadProductById.fulfilled, (state, action) => {
                state.status = 'received';
                state.product = action.payload.data;
            });
    },
});

// reducers
export const detailsReducer = detailsSlice.reducer;

//selectors
export const selectProductInfo = (state) => ({
    status: state.details.status,
    error: state.details.error,
});

export const selectProductById = (state) => state.details.product;
