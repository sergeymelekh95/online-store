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
            !hasId(state.products, payload.id) &&
                state.products.push({ ...payload, quantity: 1 });
        },
        removeProduct: (state, { payload }) => {
            //filter create new array
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== payload
                ),
            };
        },
        addQuantity: (state, { payload }) => {},
        minusQuantity: (state, { payload }) => {},
    },
});

//actions
export const { addProduct, removeProduct } = basketSlice.actions;

//reducers
export const basketReducer = basketSlice.reducer;

//selectors
export const selectBasketProducts = (state) => state.basket.products;
