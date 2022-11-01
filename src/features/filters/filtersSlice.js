import { createSlice } from '@reduxjs/toolkit';
import { EXPENSIVE } from '../../constants';

const initialState = {
    currentSort: EXPENSIVE,
    price: [],
};

const filtersSlice = createSlice({
    name: '@@filters',
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.currentSort = action.payload;
        },
        setFilteringParametersByPrice: (state, action) => {
            state.price = action.payload;
        },
    },
});

//actions
export const { setSort, setFilteringParametersByPrice } = filtersSlice.actions;

//reducers
export const filtersReducer = filtersSlice.reducer;

//selectors
export const selectCurrentSort = (state) => state.filters.currentSort;
export const selectPrice = (state) => state.filters.price;
