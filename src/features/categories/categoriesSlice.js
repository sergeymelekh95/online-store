import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadAllCategories = createAsyncThunk(
    '@@categories/loadAllCategories',
    /*async*/ (_, { extra: { client, api } }) => {
        return client.get(api.getListOfCategories);
    }
);

const initialState = {
    status: 'idle',
    error: null,
    listOfAllCategories: [],
};

const categoriesSlice = createSlice({
    name: '@@categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadAllCategories.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadAllCategories.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.error.message;
            })
            .addCase(loadAllCategories.fulfilled, (state, action) => {
                state.status = 'received';
                state.listOfAllCategories = action.payload.data;
            });
    },
});

//reducers
export const categoriesReducer = categoriesSlice.reducer;

//selectors
export const selectCategoriesInfo = (state) => ({
    status: state.categories.status,
    error: state.categories.error,
    quantityOfAllCategories: state.categories.listOfAllCategories.length,
});
export const selectAllCategories = (state) =>
    state.categories.listOfAllCategories;
