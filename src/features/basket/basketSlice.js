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
        addQuantity: (state, { payload }) => {
            const index = state.products.findIndex(
                (product) => product.id === payload
            );
            state.products.splice(index, 1, {
                ...state.products[index],
                quantity: state.products[index].quantity + 1,
            });
        },
        minusQuantity: (state, { payload }) => {
            const index = state.products.findIndex(
                (product) => product.id === payload
            );
            if (state.products[index].quantity > 1) {
                state.products.splice(index, 1, {
                    ...state.products[index],
                    quantity: state.products[index].quantity - 1,
                });
            }
        },
    },
});

//actions
export const { addProduct, removeProduct, addQuantity, minusQuantity } =
    basketSlice.actions;

//reducers
export const basketReducer = basketSlice.reducer;

//selectors
export const selectBasketProducts = (state) => state.basket.products;
