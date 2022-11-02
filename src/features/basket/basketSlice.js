import { createSlice } from '@reduxjs/toolkit';
import { hasId } from '../../functions/hasId';

const initialState = {
    products: [],
};

export const basketSlice = createSlice({
    name: '@@basket',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            !hasId(state.products, payload.id) && state.products.push(payload);
        },
        removeProduct: (state, action) => {},
    },
});

//actions
export const { addProduct, removeProduct } = basketSlice.actions;

//reducers
export const basketReducer = basketSlice.reducer;

//selectors
export const selectBasketProducts = (state) => state.basket.products;
// export const selectQuantityProducts = (state) => state.basket.products.length;
