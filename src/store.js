import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import * as api from './config';
import { productReducer } from './features/products/productsSlice';
import { categoriesReducer } from './features/categories/categoriesSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoriesReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    client: axios,
                    api,
                },
            },
            serializableCheck: false,
        }),
});
